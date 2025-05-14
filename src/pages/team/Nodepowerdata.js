import React from 'react';

const Nodepowerdata = () => {
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
                            <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
                                <p>Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). <a className="font-bold" href="/nodes/fb51ded2-2347-4297-8dc6-9464a167012c#">Verify Now!</a></p>
                            </div>
                            <div className="w-full mx-auto mt-10">
                                <div className="flex items-center mb-4">
                                    <a href="/nodes">
                                        <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900">← Back</button>
                                    </a>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                                    <div className="lg:col-span-2 h-fit bg-white p-8 rounded-[20px] shadow-md">
                                        <div className="flex flex-col items-center mb-10">
                                            <div className="w-[100px] h-[100px] bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mb-4">
                                                <img alt="Node Icon" loading="lazy" width="60" height="60" decoding="async" src="/upnl/assets/icons/node-icon-telegram.svg" style={{ color: 'transparent' }} />
                                            </div>
                                            <h3 className="text-xl font-bold"></h3>
                                            <div className="flex items-center mt-2">
                                                <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#FFC2BF]">
                                                    <img alt="Filter Icon" loading="lazy" width="16" height="16" decoding="async" className="mr-1" src="/upnl/assets/icons/cross-circle.svg" style={{ color: 'transparent' }} />
                                                    Offline
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex w-full gap-6 mt-6 justify-center text-[12px] text-[#999]">
                                            <div className="w-full px-4 py-3 text-center rounded-[12px]" style={{ border: '1px solid rgb(241, 241, 241)' }}>
                                                <p>Today Rewards</p>
                                                <p className="text-[32px] text-primary font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }}><span></span></p>
                                                <p>Point</p>
                                            </div>
                                            <div className="w-full px-4 py-3 text-center rounded-[12px]" style={{ border: '1px solid rgb(241, 241, 241)' }}>
                                                <p>Total Rewards</p>
                                                <p className="text-[32px] text-primary font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }}><span>0</span></p>
                                                <p>Point</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 text-[14px] font-medium text-[#999] bg-[#F9F9F9] p-5 rounded-xl">
                                            <div className="flex justify-between mb-3">
                                                <p>Unique ID</p>
                                                <span className="text-primary">6697186345</span>
                                            </div>
                                            <div className="flex justify-between mb-3">
                                                <p>Activation Date</p>
                                                <span className="text-primary">12/18/2024</span>
                                            </div>
                                            <div className="flex justify-between mb-3">
                                                <p>Total Uptime</p>
                                                <span className="text-primary">0 hr, 0 min</span>
                                            </div>
                                            <div className="flex justify-between mb-3">
                                                <p>Hash Rate</p>
                                                <span className="text-primary">0.25 TH/s</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button className="mt-6 px-6 py-0 text-[14px] bg-white text-[#FF3B30] hover:bg-primary-600">Unlink Node</button>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 flex flex-col gap-6">
                                        <div className="bg-white h-full p-6 rounded-[20px] shadow-md">
                                            <div className="flex justify-between mb-4">
                                                <h4 className="font-semibold text-lg">Uptime</h4>
                                                <div className="flex space-x-2">
                                                    <button className="px-3 py-1 rounded-full bg-black text-white">Daily</button>
                                                    <button className="px-3 py-1 rounded-full bg-gray-200">Monthly</button>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="flex h-full justify-center items-center w-full text-secondary">
                                                    <div className="max-w-[370px] text-center">
                                                        <img alt="Icon Empty" loading="lazy" width="64" height="40" decoding="async" className="mx-auto mb-2" src="/upnl/assets/images/empty_state.svg" style={{ color: 'transparent', width: 'unset' }} />
                                                        <span className="max-w-[100px]">No uptime data yet. Start contributing to see your progress here!</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white h-full p-6 rounded-[20px] shadow-md">
                                            <div className="flex justify-between mb-4">
                                                <h4 className="font-semibold text-lg">Total Rewards</h4>
                                                <div className="flex space-x-2">
                                                    <button className="px-3 py-1 rounded-full bg-black text-white">Daily</button>
                                                    <button className="px-3 py-1 rounded-full bg-gray-200">Monthly</button>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="flex h-full justify-center items-center w-full text-secondary">
                                                    <div className="max-w-[370px] text-center">
                                                        <img alt="Icon Empty" loading="lazy" width="64" height="40" decoding="async" className="mx-auto mb-2" src="/upnl/assets/images/empty_state.svg" style={{ color: 'transparent', width: 'unset' }} />
                                                        <span className="max-w-[100px]">No rewards data yet. Start contributing to see your progress here!</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                    <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/">
                        <img alt="overview Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Overview</span>
                    </a>
                    <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/nodes">
                        <img alt="my_nodes Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Nodes</span>
                    </a>
                    <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/rewards">
                        <img alt="rewards Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-rewards.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Rewards</span>
                    </a>
                    <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/referrals">
                        <img alt="referrals Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Referrals</span>
                    </a>
                    <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/wallet">
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Wallet</span>
                    </a>
                    <button className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center">
                        <img alt="More Options" loading="lazy" width="20" height="20" decoding="async" src="/upnl/_next/image?url=%2Fassets%2Ficons%2Fmore.png&amp;w=32&amp;q=75" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">More</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nodepowerdata;