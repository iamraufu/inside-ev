import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ViewData = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("contacts");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 50; // Number of items per page

  const navigate = useNavigate();

  const fetchData = async (type) => {
    setLoading(true);
    try {
      const q = query(collection(db, type), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDocuments(data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData(filterType);
      } else {
        navigate("/sign-in");
      }
    });
    return unsubscribe;
  }, [navigate, filterType]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
      alert("Failed to log out, please try again.");
    }
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    setCurrentPage(1); // Reset to the first page on filter change
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(documents.length / pageSize)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // Calculate current page data
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = documents.slice(startIndex, startIndex + pageSize);

  // CSV download function
  const downloadCSV = () => {
    const headers = ["Name", "Email", filterType !== "register" ? "Message" : "", "Date"];
    const rows = documents.map((doc) => [
      doc.name,
      doc.email,
      filterType !== "register" ? doc.message : "",
      new Date(doc.date.seconds * 1000).toLocaleString(),
    ]);

    let csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${filterType}_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 h-full">
      <div className="max-w-[1300px] mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Admin Data</h2>
          <button
            onClick={handleLogout}
            className="px-5 py-2 text-white bg-red-500 hover:bg-red-600 font-medium rounded-md transition"
          >
            Log Out
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <label htmlFor="filterType" className="text-lg font-medium text-gray-700">
            Filter By Type:
          </label>
          <select
            id="filterType"
            value={filterType}
            onChange={handleFilterChange}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="contacts">Contact</option>
            <option value="register">Register</option>
          </select>
          <button
            onClick={downloadCSV}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Download as CSV
          </button>
        </div>
        {loading ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <h2 className="text-lg text-gray-500">Loading...</h2>
          </div>
        ) : (
          <div>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 border-b text-left text-lg font-semibold text-gray-600">Name</th>
                  <th className="px-6 py-3 border-b text-left text-lg font-semibold text-gray-600">Email</th>
                  {filterType !== "register" && (
                    <th className="px-6 py-3 border-b text-left text-lg font-semibold text-gray-600">Message</th>
                  )}
                  <th className="px-6 py-3 border-b text-left text-lg font-semibold text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {currentData.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 border-b">{doc.name}</td>
                    <td className="px-6 py-4 border-b">{doc.email}</td>
                    {filterType !== "register" && <td className="px-6 py-4 border-b">{doc.message}</td>}
                    <td className="px-6 py-4 border-b">
                      {new Date(doc.date.seconds * 1000).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-start mt-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"}`}
              >
                Previous
              </button>
              <span className="px-4 py-2">Page {currentPage}</span>
              <button
                onClick={handleNext}
                disabled={currentPage === Math.ceil(documents.length / pageSize)}
                className={`px-4 py-2 rounded ${currentPage === Math.ceil(documents.length / pageSize) ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"}`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewData;
