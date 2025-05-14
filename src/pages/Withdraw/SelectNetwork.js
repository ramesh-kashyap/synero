import React from 'react';

const SelectNetwork = () => {
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
                <p>Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). <a className="font-bold" href="/wallet/withdraw#">Verify Now!</a></p>
            </div>
            <div>
                <div className="flex justify-between">
                    <span className="text-white text-sm rounded-[22px] h-[33px] px-3 bg-black mb-4 mt-10 flex items-center space-x-2 cursor-pointer">
                        <img alt="Back Icons" loading="lazy" width="17" height="12" src="/upnl/assets/icons/icon-back.svg" style={{ color: 'transparent' }} />
                        <span>Back</span>
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                    <div className="lg:col-span-3 xl:col-span-2 bg-white rounded-[16px] p-6">
                        <h2 className="text-xl sm:text-2xl font-bold">Withdraw</h2>
                        <div className="flex justify-between items-center w-full bg-[#F9F9F9] rounded-[27px] px-[40px] max-sm:px-[20px] py-[4px] max-sm:py-[10px] text-[14px] text-[#999999] my-4 sm:my-6 sm:py-6 max-sm:gap-0">
                            <span className="text-center text-[#171717] cursor-pointer">Select token</span>
                            <img alt="right-arrow" loading="lazy" width="30" height="30" src="/upnl/assets/icons/right-arrow.svg" style={{ color: 'transparent' }} />
                            <span className="text-center">Withdraw details</span>
                        </div>

                        <br /><br />

                        <div>
                            <div onClick={() => window.location.href='/WithdrawReq'} className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]">
                                <div className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                    <img alt="USDT logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_usdt_2.svg" style={{ color: 'transparent' }} />
                                    <div>
                                        <div className="text-[16px] text-[#171717] font-semibold">USDT</div>
                                        <div className="text-[12px] text-[#999999]">TetherUS</div>
                                    </div>
                                </div>
                                <img alt="USDT logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                            </div>

                            {/* Uncomment to add more tokens */}
                            {/* <div className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]">
                                <div className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                    <img alt="USDC logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_usdc_2.svg" style={{ color: 'transparent' }} />
                                    <div>
                                        <div className="text-[16px] text-[#171717] font-semibold">USDC</div>
                                        <div className="text-[12px] text-[#999999]">USD Coin</div>
                                    </div>
                                </div>
                                <img alt="USDC logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                            </div>
                            <div className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]">
                                <div className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                    <img alt="MCC logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_mcc_2.svg" style={{ color: 'transparent' }} />
                                    <div>
                                        <div className="text-[16px] text-[#171717] font-semibold">MCC</div>
                                        <div className="text-[12px] text-[#999999]">MCC</div>
                                    </div>
                                </div>
                                <img alt="MCC logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                            </div> */}
                        </div>

                        <br /><br />
                    </div>

                    <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                        <h3 className="font-semibold mb-3">History</h3>
                        <div className="space-y-4 h-full">
                            <div className="flex h-full justify-center items-center w-full text-secondary">
                                <div className="w-full text-center">
                                    <img alt="Icon Empty" loading="lazy" width="64" height="40" className="mx-auto mb-2" src="/upnl/assets/images/empty_state.svg" style={{ color: 'transparent' }} />
                                    <span>No transactions found</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/">
                    <img alt="overview Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">Overview</span>
                </a>
                <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/nodes">
                    <img alt="my_nodes Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">Nodes</span>
                </a>
                <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/rewards">
                    <img alt="rewards Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-rewards.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">Rewards</span>
                </a>
                <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/referrals">
                    <img alt="referrals Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">Referrals</span>
                </a>
                <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/wallet">
                    <img alt="wallet Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">Wallet</span>
                </a>
                <button className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center">
                    <img alt="More Options" loading="lazy" width="20" height="20" src="/upnl/_next/image?url=%2Fassets%2Ficons%2Fmore.png&amp;w=48&amp;q=75" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">More</span>
                </button>
            </div>
        </div>
    );
};

export default SelectNetwork;