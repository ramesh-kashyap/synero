// import React, { useState } from 'react';

const Email = () => {
   

    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                <div className="lg:col-span-3 xl:col-span-2 flex flex-col">
                    <div className="bg-white rounded-[16px] mt-6 p-6 lg:p-8 flex-1">
                        <center>
                            <h3 className="font-semibold mb-3">Change Email</h3>
                        </center>
                        <form method="post" >
                            <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    readOnly
                                    style={{ width: '100%' }}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="first_code" className="block text-gray-700 font-medium mb-2">Verification Code</label>
                                <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                    <input
                                        type="text"
                                        name="first_code"
                                        placeholder="Enter verification code"
                                       
                                        className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20"
                                    />
                                    <span
                                        className="code-btn"
                                        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}
                                    >
                                        Get Code
                                    </span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="newEmail" className="block text-gray-700 font-medium mb-2">New Email</label>
                                <input
                                    type="email"
                                    id="newEmail"
                                    placeholder="Please enter the new email"
                                    name="newEmail"
                                  
                                    className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="second_code" className="block text-gray-700 font-medium mb-2">Verification Code</label>
                                <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                    <input
                                        type="text"
                                        name="second_code"
                                        placeholder="Enter verification code"
                                      
                                        className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20"
                                    />
                                    <span
                                        className="code-btn"
                                        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}
                                    >
                                        Get Code
                                    </span>
                                </div>
                            </div>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }}
                                    className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300"
                                >
                                    Confirm
                                </button>
                                <br /><br />
                                <a
                                    href="user/profile-setting"
                                    className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300 inline-block text-center"
                                >
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Email;
