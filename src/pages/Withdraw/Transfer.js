import React from 'react';

const Transfer = () => {
    return (
        <div id="__next">
            <div className="Toastify"></div>
            <div className="w-full h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
                        <div>
                            <div className="flex items-center justify-between border-b border-gray-200">
                                <a className="flex items-center py-5 pl-[22px] h-[80px]" href="/dashboard" style={{ width: '119px' }}>
                                    <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" src="/upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '150px' }} />
                                </a>
                            </div>

                            <nav className="my-5 px-5 text-sm font-medium text-[#555]">
                                <div className="text-gray-400 text-xs mb-2">MENU</div>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md bg-green-500 text-white" href="/dashboard">
                                    <img alt="overview Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-overview_active.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Overview</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Nodepower">
                                    <img alt="my_nodes Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Nodes</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Team">
                                    <img alt="referrals Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Referrals</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Wallet">
                                    <img alt="wallet Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Wallet</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Profile">
                                    <img alt="profile Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-profile.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Profile</span>
                                </a>
                            </nav>
                        </div>
                        <footer className="my-5 px-5 text-sm font-medium text-[#555] hidden md:block">
                            <div className="text-gray-400 text-xs mb-2">FOLLOW US</div>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="X.com Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon_twitter.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">X.com</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Telegram Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon_telegram_2.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Telegram</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Discord Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon_discord.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Discord</span>
                            </a>
                            <div style={{ borderTop: '1px solid rgb(241, 241, 241)', margin: '20px 0px' }}></div>
                            <div>
                                <a className="flex items-center py-2 px-3 mb-4 rounded" href="logout" onClick={(e) => { e.preventDefault(); document.getElementById('logout-form').submit(); }}>
                                    <img alt="Contact Us Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/customer-service.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Log out</span>
                                </a>
                                <form id="logout-form" action="logout" method="POST" className="d-none">
                                    <input type="hidden" name="_token" value="Mp8WGPpkCtxtvkezkpwvKGFaP8ckS5wUjCIsgRln" />
                                </form>
                            </div>
                        </footer>
                    </div>
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
                            <a className="md:hidden" href="/">
                                <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" className="max-w-[156px]" src="/upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '50px' }} />
                            </a>
                            <div className="w-full flex flex-row justify-end md:justify-between">
                                <div className="flex items-center h-[38px] text-gray-800 font-medium">
                                    <a className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" href="team">
                                        <div className="flex items-center rounded-full pl-3 text-sm">
                                            <img alt="User  Avatar" loading="lazy" width="16" height="16" decoding="async" className="mr-3" src="/upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
                                            <span>  11223344</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="relative flex items-center space-x-2 font-semibold">
                                    <span className="hidden lg:inline text-xl">Hello, Bernila!</span>
                                    <button>
                                        <div className="flex items-center justify-center w-[40px] h-[38px] rounded-full mx-auto text-[24px] font-semibold" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }}>B</div>
                                    </button>
                                    <div className="hidden md:inline-block">
                                        <div className="relative inline-block text-[16px] font-bold">
                                            <button className="flex p-2 items-center bg-white border justify-center align-center h-[38px] w-[60px] rounded-[20px] hover:bg-gray-200 focus:outline-none">EN</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                            <input type="hidden" name="_token" value="Mp8WGPpkCtxtvkezkpwvKGFaP8ckS5wUjCIsgRln" />
                                            <div className="mb-4">
                                                <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Enter Amount</label>
                                                <input type="number" placeholder="Please enter the amount" name="amount" id="withdrawalAmount" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">User  ID</label>
                                                <input type="number" placeholder="User  ID" name="username" id="username" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="transaction_password" className="block text-gray-700 font-medium mb-2">Transaction Password</label>
                                                <input type="number" placeholder="Transaction Password" name="transaction_password" id="transaction_password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
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
                                        {/* History Items */}
                                        <div className="flex justify-between items-center text-sm mb-4">
                                            <div className="flex">
                                                <div className="flex items-center justify-center rounded-[50%] bg-[#F9F9F9] w-[44px] h-[44px]">
                                                    <img alt="IN Icon" loading="lazy" width="28" height="28" decoding="async" src="/upnl/assets/icons/icon_down.svg" style={{ color: 'transparent' }} />
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
                                        {/* Repeat similar blocks for other history items */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="/dashboard">
                        <img alt="overview Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Overview</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="/node-power">
                        <img alt="my_nodes Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Nodes</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="team">
                        <img alt="referrals Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Referrals</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="wallet">
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Wallet</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="profile-setting">
                        <img alt="profile Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Profile</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Transfer;