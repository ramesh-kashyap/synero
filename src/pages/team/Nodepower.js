import React from 'react';

const Nodepower = () => {
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
                                    <a className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" href="user/team">
                                        <div className="flex items-center rounded-full pl-3 text-sm">
                                            <img alt="User  Avatar" loading="lazy" width="16" height="16" decoding="async" className="mr-3" src="/upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
                                            <span>11223344</span>
                                        </div>
                                        <div className="flex mx-2 items-center justify-center font-bold"></div>
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
                            <div className="w-full mt-10 flex justify-center text-primary">
                                <div className="w-full max-w-[1440px] rounded-lg">
                                    <div className="flex justify-between mb-4 items-center">
                                        <a href="user/subscribe">
                                            <button className="px-3 flex items-center h-[34px] bg-[#171717] rounded-[22px] text-[14px] text-white">
                                                <img alt="Add Node Icon" loading="lazy" width="16" height="16" decoding="async" className="mr-1" src="/upnl/assets/icons/add_node.svg" style={{ color: 'transparent' }} />
                                                New Node
                                            </button>
                                        </a>
                                        <div className="relative">
                                            <button className="px-3 h-[34px] bg-white rounded-full shadow">
                                                <img alt="Filter Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/bars-filter.svg" style={{ color: 'transparent' }} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white mb-3 p-4 rounded-[16px] font-semibold text-gray-600 text-center">
                                        <div className="hidden md:grid grid-cols-5 lg:grid-cols-6">
                                            <div className="text-left">Node</div>
                                            <div className="hidden lg:inline-block">Unique ID</div>
                                            <div>Status</div>
                                            <div>Hash Rate</div>
                                            <div>Total Uptime</div>
                                            <div className="text-right">Today Rewards</div>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden">
                                            <div className="text-left">Node</div>
                                            <div className="text-right">Status</div>
                                            <div className="text-right hidden sm:block">Today Rewards</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <a href="user/node_power_data">
                                            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                                <div className="hidden md:grid grid-cols-5 lg:grid-cols-6 items-center">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                            <img alt="Node Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">raj</p>
                                                            <p className="text-xs text-[#999999]">Telegram Node</p>
                                                        </div>
                                                    </div>
                                                    <p className="hidden lg:block text-sm text-center font-medium">1236796590</p>
                                                    <div className="flex justify-center">
                                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">Online</span>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p className="text-sm w-fit text-center px-3">0.25 TH/s</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p className="text-sm w-fit text-center px-3 bg-[#F1F1F1] rounded-full">0 hr, 0 min</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-semibold"><span>0pt</span></p>
                                                        <p className="text-xs">Total: <span>0pt</span></p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden items-center">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                            <img alt="Node Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">Sahildewan2</p>
                                                            <p className="text-xs text-[#999999]">Telegram Node</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">
                                                            <img alt="Status Icon" loading="lazy" width="16" height="16" decoding="async" className="mr-1" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                                            Online
                                                        </span>
                                                    </div>
                                                    <div className="text-right hidden sm:block">
                                                        <p className="text-lg font-semibold"><span>0pt</span></p>
                                                        <p className="text-xs">Total: <span>0pt</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/dashboard">
                        <img alt="overview Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Overview</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/node-power">
                        <img alt="my_nodes Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Nodes</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/team">
                        <img alt="referrals Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Referrals</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/wallet">
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Wallet</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                        <img alt="profile Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Profile</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nodepower;