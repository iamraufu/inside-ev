import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

      const data = {
            "PoData": [
                  {
                        "VENDOR": "0000100001",
                        "PO_ITEM": "10",
                        "MATERIAL": "3101680",
                        "PLANT": "DK02",
                        "UNIT": "KG",
                        "QUANTITY": 10.5,
                        "COND_VALUE": 250,
                        "Price": 200
                  }, {
                        "VENDOR": "0000100001",
                        "PO_ITEM": "20",
                        "MATERIAL": "3101633",
                        "PLANT": "DK02",
                        "UNIT": "KG",
                        "QUANTITY": 10.25,
                        "COND_VALUE": 250,
                        "Price": 200
                  }
            ],
            "AuthData": [
                  {
                        "UserID": "rupom", "Password": "bd1975", "BapiType": "ZPRI", "COND_TYPE": "ZAXX"
                  }
            ]
      }


      return (
            <div className='w-1/3 mx-auto mt-5 p-3 border text-center'>
                  <h1>Homepage</h1>
                  <Link to='/dashboard' className='underline text-sky-900'>Dashboard</Link>
                  <p>
                        "email": "eftykhar@gmail.com",
                        "password": "asdf1234",
                        "name": "Eftykhar"
                  </p>

                  {/* 0000100001 */}

            </div>
      );
};

export default Home;