import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { toast } from "react-toastify";


const Language = () => {
    const navigate = useNavigate();
    const backClick = () => {
        navigate(-1); // 👈 Go back to the previous page in history
    };

    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(i18n.language);

    const changeLanguage = async (lng) => {
        try {
          await i18n.changeLanguage(lng);
          setSelectedLang(lng); // <-- Ye line missing thi
          // toast.success(`Language changed to ${lng}`);
        } catch (error) {
          // toast.error('Failed to change language');
          console.error(error);
        }
      };
      

    return (

        <div class="uni-body pages-login-language">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/login/language">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-002d254a="" class="page">
                                <uni-view data-v-002d254a="" class="ellipse"></uni-view>
                                <uni-view data-v-002d254a="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-002d254a="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                        <uni-view onClick={backClick} data-v-35b9a113="" data-v-002d254a="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>


                                            <uni-view data-v-002d254a="" class="back"><img data-v-002d254a="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)'  }} /></uni-view>
                                            
                                       
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-002d254a="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <uni-view data-v-002d254a="" class="page-title">Language</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-002d254a="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-002d254a="" class="content">
                                    <uni-view data-v-002d254a="" class={`item ${selectedLang === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')}>
                                        <uni-view data-v-002d254a="" class="left"><img data-v-002d254a="" src="/static/img/en.png" alt="" />English</uni-view>
                                        <uni-view data-v-002d254a="" class="right">
                                            {selectedLang === 'en' && (
                                                <img data-v-002d254a="" src="/static/img/selected.png" alt="" style={{filter: 'brightness(0.72) invert(0)'}} />
                                            )}
                                        </uni-view>
                                        {/* <uni-view data-v-002d254a="" class="right"><img data-v-002d254a="" src="/static/img/selected.png" alt="" /></uni-view> */}
                                    </uni-view>
                                    <uni-view data-v-002d254a="" class={`item ${selectedLang === 'hi' ? 'selected' : ''}`} onClick={() => changeLanguage('hi')}>
                                        <uni-view data-v-002d254a="" class="left"><img data-v-002d254a="" src="/static/img/hi.png" alt="" />Hindi</uni-view>
                                        <uni-view data-v-002d254a="" class="right">
                                            {selectedLang === 'hi' && (
                                                <img data-v-002d254a="" src="/static/img/selected.png" alt=""style={{filter: 'brightness(0.72) invert(0)'}} />
                                            )}
                                        </uni-view>
                                    </uni-view>




















                                    {/* <uni-view data-v-002d254a="" class="item">
                                        <uni-view data-v-002d254a="" class="left"><img data-v-002d254a="" src="/static/img/pt.png" alt="" />Português</uni-view>
                                    </uni-view>
                                    <uni-view data-v-002d254a="" class="item">
                                        <uni-view data-v-002d254a="" class="left"><img data-v-002d254a="" src="/static/img/tr.png" alt="" />Türkçe</uni-view>
                                    </uni-view>
                                    <uni-view data-v-002d254a="" class="item">
                                        <uni-view data-v-002d254a="" class="left"><img data-v-002d254a="" src="/static/img/ro.png" alt="" />Română</uni-view>
                                    </uni-view> */}

                                </uni-view>
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>

        </div>
    );
}
export default Language;


