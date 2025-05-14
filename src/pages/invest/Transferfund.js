import React from 'react';

const Transferfund = () => {
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                <div className="lg:col-span-3 xl:col-span-2 flex flex-col">
                    <div className="bg-white rounded-[16px] mt-6 p-6 lg:p-8 flex-1">
                        <center>
                            <h3 className="font-semibold mb-3">Internal Transfer</h3>
                        </center>
                        <h3 className="font-semibold mb-3">Activation Wallet: $990.00</h3>
                        <br />
                        <form action="user/SubmitTransferFunds" method="post">
                            <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
                            <div className="mb-4">
                                <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Enter Amount</label>
                                <input
                                    type="number"
                                    placeholder="Please enter the amount"
                                    name="amount"
                                    id="withdrawalAmount"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">User  ID</label>
                                <input
                                    type="number"
                                    placeholder="User  ID"
                                    name="username"
                                    id="withdrawalAmount"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="transaction_password" className="block text-gray-700 font-medium mb-2">Transaction Password</label>
                                <input
                                    type="password"
                                    placeholder="Transaction Password"
                                    name="transaction_password"
                                    id="withdrawalAmount"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                                />
                            </div>
                            <div className="text-right">
                                <button type="submit" style={{ backgroundColor: '#2da9dd' }} className="px-6 py-2 bg-blue-500 text-white rounded-[12px] hover:bg-blue-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                    <h3 className="font-semibold mb-3">History</h3>
                    <div className="space-y-4 h-full">
                        {/* Example of a history item */}
                        <div className="flex justify-between items-center text-sm mb-4">
                            <div className="flex">
                                <div className="flex items-center justify-center rounded-[50%] bg-[#F9F9F9] w-[44px] h-[44px]">
                                    <img alt="IN Icon" loading="lazy" width="28" height="28" src="/upnl/assets/icons/icon_down.svg" />
                                </div>
                                <div className="ml-3">
                                    <p className="font-medium">Transfer</p>
                                    <p className="text-secondary font-light text-sm">11223344 To 8091133</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-green-500">+<span>200</span></p>
                            </div>
                        </div>
                        {/* Repeat history items as needed */}
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/dashboard">
                    <img alt="overview Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-overview.svg" />
                    <span className="text-xs mt-1 text-gray-400">Overview</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/node-power">
                    <img alt="my_nodes Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-nodes.svg" />
                    <span className="text-xs mt-1 text-gray-400">Nodes</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/team">
                    <img alt="referrals Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-referrals.svg" />
                    <span className="text-xs mt-1 text-gray-400">Referrals</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/wallet">
                    <img alt="wallet Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-wallet.svg" />
                    <span className="text-xs mt-1 text-green-500">Wallet</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                    <img alt="profile Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-wallet.svg" />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div>
        </div>
    );
};

export default Transferfund;