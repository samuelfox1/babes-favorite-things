$(document).ready(function () {

    console.log('linked!')

    var currentURL
    var pictures = [
        {
            URL: "https://previews.dropbox.com/p/thumb/ABB2oKAgq2zgulnPiqVAnB07H_9C7QH50U1DcWlHqFofv9WFWa2YKZPAU8TbjP8_QE8PsHZeneC_fK_YL3OKe-zePcw4Ss0FZlxR7C3ciix23vT3auz_AGTyyAwj7OHN3TenC9PKsR9i5nCl2duPPrriqedsJj1_KRKliBGfcpWRXw89X-vdsJ-IgOTWdsVApTISc3De8rkwZL6q6lLCPt_f-jxL7KVzMM28E8GZaauyMorLs6PCFNg-2DRw5uoqtAIT5_oLEfqk6TeqYJUSmqMp9QIJKqAv33I5c5uTL1omsihg_G6y1WYKstZ-nAE39Vs0eCvnXjGLn2tujix38qTdndq0w0wr11TCw7i8sRLwuw/p.jpeg?fv_content=true&size_mode=5"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABANhp0zuG2RXwnS2uGGTPts55pD62r-RkZj1_P7EoxG0gIRi4cLTnoSpIkql86YN7kOJ5A_HfQ_Bg-15iiCcetq95mGQkFzZg0pFLwF3-b4Fso3KajxgAZdbIZhAgLu15hjXWMO4TghHS3l5iv3wEHPsIhtIOrGpCDEZS8eEF58KSYa5qkVaf3f1M3ZRALtwjRB1mRQurNd8LnqPJqzVPnyBrmg1UDBtS6R4lGC1x7LnTKi9-yDGSsHGyOWXLtVmtXx7ZU_SeoG_stjrPxepIYGzynfR5gvqT90sb7AAD56AH9S4qFRY94L5moIKF7aLxeOgOPsuSjKzd2vwmMClLElalK2JFJwdlRHRUkTIyVkNLbPs4NEBXXsNdebvACZBa_gZ_Mcee5jGT4XdGXh99DnsNtSASVPPovuP674iKB32ukgI2OOqUAv3_NC-EthvGU/p.jpeg?size=2048x1536&size_mode=3"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABANfRvHx0s4u-UP-ykNRcbcOgOBvdqaT92f22O97vU0XgoqIf352yvKPkV8QNEMsLktQlfXLGDDKqCEIQYF4SEUZJKS0-mVltIDVESegP5QlHCTub0LLUsPu6f1Sp8jvKVRi5G0q8GPd1polCX-DOGa1XaM4_4LS85GrIolbKuwKZlr0-O6Mk4EQeTZDTieAM016HHCHQZTP4nqaomWMJ-9Tei474KqJ88UYGIY6jyCdRM7DH70wZlhhq42y3Blm1dqIYIdj0xp_VSckhTP9nM0ITD-u_1O6O978kQJN8p5GDj93xDcWGFocLOlTsGCkxVRnB6Vegmtd4VyPt6GlKs98bzRlJ_o2CelK1ovleJRww/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABB1xk4qZmJCTROe6k_8JVegKNSB0Ubg3HjjwES_qSXDSwYxed9SGdjtZr_NOOfI30WrJISYkWrfy7mAs1y8zlvZX3RrcGUcm-k2rntWsdxkIOopI5-4GekP-p-GDTfhuFI9Ya9DA-hVRC3zZKQmHKa0II8zaUVJmNiRrXYT0wRif13EBXaH77_VqX-e2GnPHHWSw20A0_f-RMC3TbnykAish_X3z7PRgOSnDfk0YK5RU8G-JvpL-8OrdzoiO2GPJU2PPkYB6SbsgRSeIfMxid7ZhtYDW3m7J8d5JrBIFRpwumRspk5-5QzN9xpJeuzDXA0Ufm_Sj8IpIu4aO9cDuSCzlxE_xdsIyV_gtuWHGjm46g/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABBo_NEcuvecHjCsVbI7jasgF_Tz8mqWZjh8G-gOBRPiJgWlKXVG7NqxmlIChdkWqxGuF9KVx0ayeWS6SZpPKtSy_zxLXIQo6xIaDJIbaSrN3LejCXX2GYhuHrV6BzFhZYIks77PSqgYHlDERtd7edmYtiVKRs-t-c3pvnU_zv5D3edGCy_lDTVzbgto62WiJvcdnaGFqKhVQAwcdm2HRdSkeCTW51yMNZ8E8kiuyF0YAMMZ4z2RE892RcPyhG6sztTxmMYdRyJjEieZg9eXLiux0AutIOXQm8bTVHMd_6dnXu8Rc0RKOdnFArP9HGnvMbxJIDvb-8fc3gQLGsz6iEBo5oOzLIxJSat9_xw3hXLGvA/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDyK3hSBEjOcgz77ssBTJgRTFLruZwVfDc6a1uEY3ox29FemDdyvwDbhaCs2gDh4ozAbn124le1NzG9aSi_2hZbLeMsmhs7XDSOVLq3GsZe75nzOAfz6BJHh3uQxWW00huH56esH8eBk3lXrxbWWQSm4iYxcdhDbG-82PH3uKtqL28ubLo50W68O9OxodXJ6LrZm4LvPoXvcaXxdNhYpHmRT0sxCnesWVHMePH9M9ylpGwrGFviC8hs9ymvFD6SZ1rnqAOxPtnNvzbkzjtguKyIF2Y4hIAbMFNfdMurRGEqNAdUQ7vWuq1ZhegdscKQ_EJj1-ZxY7-ZowsvbdF7GkFR0NHSVghlYY_ROzPo_4JaBg/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABBbzoJ_ce8MpnZfZpBPcAfG3gcP9j5clvtuoBXjI_o6PRXZyESKM6UyGqmNaOpfFY7qI8dB7nigDtJEhXpVeQFlG32FihXMSSuhvbD2eilIfpsU45dAREEnHzjJK4aNUyTeSlju8ghAMRe2VC26mdCbinare-h5MahMuNevd4Q4uIy0yxNmVdPrVJjuC5iMTrl7FnKRHxeKdW_qoaNM8Bz9Ka_BDnXY0Ld8pUyoYrPU4M302wdaDQvVuC83lWlwkd3waaerzflfiuhiL8e1fIB_mOrDvYowK9Z6VKbR8XOIvk8Zesm-yoo0E9e0lcsHSlDbXvZ-j7kC3SGL9RxwC749BXAIIqVIK1KdDad62B2bmg/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABCu6lFMvrHEW_V2xyKYAFsGMp3AISsaQPNfUpXxqjW-UqHni4enb1fhPQcEbGeLjOuByS9iNOT4tVVHmzzbRY40tiXkdOzLl-sCfImuEtVrd1XBWSePeHwOA4d0u1febXI7yLhjYUGuKiPlmAkq_EXb8MXaCYreL0jBD1k_XKSxiOJWgF3frUeB7v8I_pdO5XFo7v_HrwUfJP8D_G3UUx3dGNQBxD-SD_gLdnHtm9B6vOqVrUKeipcIJDsHCBY80mu5agEWAq8DHrGnV17kUepLVzaNgSKHHzY9_X1MmewIYG2njJc6hMb_glUyzS_PsZQLhpSgD6CeMWZayE5IzJmtKD2gfh3HdH2STfNjAUYMSg/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDyUUwEGIdMF12tJWz-CzG5wcnKMUVv2w3_O6p9FFRx6IB_aRqXD9m_QUlsNJ8z8BTJshbVNqzjQtTXSKwP2WrUmFhlfc1aYq1wT_T6L1AKFMgVd6F6mvoEc95NhSS5IWLhjuy49-iKrdkyk5jiTcX6v_8GnehYUGE5Sf5O2EYIFyW9RqMe3iVdgpGYAF27NW7LnTy13ouVRmQ7RwpNX5JP07h7lsiY8v8dcn9PhHK27sSWtp3z1hgEVEGg7OeneKe3zrBlSdorx_AEV3VS7Rp8IddzvHjlJWLwhC6eetWz1wpE_ngggpgybqqqxGkjqOY7e3ppOyGWDN8lmA6-u3-hEJpouzkEBugXdcH7dmW_qA/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABB_lU8YQhsSmElqh0TrVDb7WfmATzxy82d-hmMENDEDn4F03lsVM_VV4ZZ3hj4kA0IJeF0uN76b3U6mOdbjnCXzzVvCFwXF4lUeycxqFHKsIm95A5mmBIexlMYKB3CkCnT7PI2TH_WfAEjbM56N7F4H_24K9gfh_6uv-9T3_Qfy42O_fuySoeSlAWBJxmUNmwqTfWx7vn3DxNoGLyG3mQ06hINrlPe5EIeU2EsJoIFZo58oqoKhFzjQ0I9SHwBfEzLhqr8bwKfRFHIQm1PbA1Wkk_bvKBsa74G1Gx4fU19WAXNwSz4CpNmw5sZlE1HTld8rjb8-8Q8huBDccmz0qSq97iEakXE8pH5x28sCyLVDNQ/p.jpeg?size=2048x1536&size_mode=3"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABAK4tHsLtO1RMaUpm9rtkqG2ZNxHPkH-0PJy_vPm8zM0jhvuaxy1GcTkYfFqtM_RrIQ3I-7DfL1j5waNfAk-AMSCmPlKxnRpKkzbOlQ0sv82anh_jKXvIWuwxKGpDJ67chhYTL22o1YYsJ56HrkW9Y4tUsUDKebBlApEoVfnCrMO2YXgDrsISFLI_0FgxTMbz7O1w7jcSdoppQmMKRjgTXyeb17NG_77jTL7yKvwNlkzoA8A2knouv8wZC2o-MQK_tV9GllGHGws9TREBypjW8KSSSMdRbAWREss65YNEWLtzm6kk60X_Z_C6Kn72AlITburrErHmL2yRIBcSgqRmTfQZ3UHYQSSEB6bzb8YqFIaQ/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDF-K5OXD6wpXJqfpXIm6En9bWajy4dDV13kTBe8h7a9R_KKJoghycLAaYX7yPl_Z_YsDXf0ATsFASVj-h7MM9Va4ic40NLzaNxhRpWraJm3GB8ykQFEdarsTQR9sprwaohRIfWpdpGSOnhRPZq073nxqhTlVUg0Q-NNlRLKwrmz7kZCS0N0BEEsmikK0YkMsyExE6B23dodG0g0GtgfGhRK2C9JVclIBzPoUYY-Jf132sN-GPJtfgGwZpwe4ejIbw63dWUrli33dQB69oVgTLyIlqV0vVkWDfE8I65ow9Flfd_MrqWQV7lllzurP8bgAVVJOWLy4FiKXFHeBPN2qZ86enWH0H8tTOatfHHKU5G_g/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABCG4LxI5N9iLYnpYntwHpNCk0J0XoPb-0z6DLYmXpOwzxq8YhN4QcegWTsvBuj-PDJjkAa7iWGGNlKVnW3jD8wfNZWdKCoau8LHLWKm0I0bMLxF1lwgAsT1gQ29SDYZ6241u--r9YeqBTTRZnAEWeegHEb9MSaJ5HQBJRLsRyPfA-Q4g0W8ke0UfKqkWcPk4zU8Ri6q48PGWg7zPcmz01Ar-sCSRTSm-RcuvCuNuKKZrUpwYCpopNCJxqwdbjFkTDf83lz3zXFHO03S4NVRt8JtsI3bov8xD_gODT0Nm25yKG7a6sg1JMlmPUQuifoWsKCLtkBsc_Cd0dJ4jKIQ4OfybszNIpSPGo180m6IHHHc-A/p.png?size=2048x1536&size_mode=3"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABCT6qirKvHlehw6vr-yjfDwLVsUTMveFltOG-9cRxTp_Fb32cTwQWGs4F2Oxbj8_njwUa2uYrLsu4nVFQSRe8p0SdXBI_cpEKU7z8oCg2wkB7KgGtiQu6dF6GgGQwAg3JzRPcZFTUogep-xjsuBXW1ozBNXiafA2Cg_s00d6uQm1kkS3-OWNzldgu1zP0TtBi72hQOfT3IlIy7Z88Y4opxV4V1HrRrpPgO_zZTndwh2A-QID61366HC9IVhoJhGl4ZV98JP5qDm_GiKPEhLfh2tLEetEzxyb5jvd7qjl3DsaYZihrMy-xJKyR-zWF4TTug24S1dOHjRtyVkFpeRwad3EzPzlOt2zrDzjhJL80M5Gw/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABA-ywGwWxqA5u37FkW6rwgsQI90qyuVI9obvt63ll-kef79QtsSh_CN-_LebMdQ597iCh191PwqZkuycRDx8YEO4vpo4FKx7NiUH98BONO1WKlkh6kqbVyVilP2AKBScqcdyA9Tghtj8PSB2lXoOX7nN3luZR9pXly-NeS2EXjWGp3UEcILJ_c1cbsbN_8K9_dMmcoxUDsZj7d0xs0AlUdEIIoX8dKQYpGdsCU7VaFPhhOBz-DuWAodLysIBlBFDFsPY23sVhFvn-APsaTEUSimcDhU5S3LK7vSuAbAc1EGMx-1jDwnEBmyWXJnmBI6fimIwBNUn_Aazs1jZ8mQ0A8ezI69sQMqQ4MsbZz3pEkpwA/p.png?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDPksY9VCB2B_8lsFRAgrbvHa-seu48mSlJPt1kYWyqWqRP23cclb6-aN7ISl-klqKwVzymkjMDGat_B9DUHmPNXhixiYbE5fk0MwVCPtGi78s8B2wmDpJ_S8BidQbvMcTMrJOJZodbVGhbIIdNoibxrbQFpK7iN6OUcEDzxQLIFAr5VBwGNBevH14ZvRT9X5VTg1tbDfZ6QukcqfepLGJoOF_OYHs_4b_FJgkHCLBRD1c0cCLvtcCfiayrvTVCwU3TbkmeEu8MwqwWZZRlxxypuIACzTydqquahX2_U0MhrzlRU3Nk76VlPUEvLDsXDweT_HD3suZJk0OuzkMSb6ntEr4HDt-NDoT-O27c4wJDmw/p.png?fv_content=true&size_mode=5"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABA42lfSLNyhw99RsXRoDVx01jdKq_LLnJ7D2OgS9m3XgV0aFZM-1RKM18I1JrmTkfHNpPXsam3vTw1QuMIvVUvxeUfKtOTUGJzmbOVTLmNwu0A3yXaLsQsiqVX3HLdRcvJcg-ew7vUgyyUa-xD8MdQcZhiNuPWd5J5mdGsGyCoUciA8UQN6cT1daGMKGpejLOwiqS62CLly2YKiDW4gaD7ITK3_oOUDWMyC7Rh6eV78shXxNoKugfUG7IlTXKV7BABBEUQ7qfGCaDb2Z9wXlrjSlvloNPJmga2YHoBWWNJg53ZfcBJdAbiBljaj0--ZZqxlpg8EoQOOgsPrlZwWkK0YG2vb3_HWvFzCA5qYTVFPPw/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABBZYIyvHxNOreXqbJJjY2dILK2DVAkcV0_FeqvqSKudz57ZNtBfZuu0gANVjku0yZPPW-F-PaL3jniYJBhYzwzSqunBwQ60yr4WLIAnAbrCboewNeCRdNjIIGDOOyR08_OA7SJrY48hT4BcW93nAFwTFF9VeRafFCcwlELda6DdDaCCkrHm5waRuT_tR6I6cYTphWhpOPLySyfZW2LCZ9ZFon-ep1xH4nksxL3zVIr_1Y653dY0rA0nlS8msi0BpSqrlRzjjpY5od3V65VaiLWmABx4onh1zoRUzP_iVEUtnItm4U_gX5w8wSyOOPXrLpM_-DqXGXqqpga9IrK1JOcVq690GFcqiiIBrTYLmQkCaQ/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDu6XZSvnpbbJlLW2QQJEYBXbDcWnTr51eoLU8xUZmTb_6bh4e6ByNaH5nskWNKR2q5byxEMru2DwFwubJApYxy9rGINyphkW_HVVeNrCNv8_sVnNM7E2SGP6jKPJe21UcnCaIbUX18lqo8xDy9-qaLCTQ21QGYLlEasB-UDzkUw11f84OO8vgc39Tzrhe7bc3jcOLHp1ra3TauaYpva1hbbtmiuKRQN5OTuRGbdlOUjTMir0veyCV9z4BbpT1RcV1SNigc1JqmDqzK0N0MGlWxL2N6v44qYb8QLmE6N7vOdHQdJ51cmeQeifCClVJT80FEYOca42KHyzmawa2PA-cE8V1RKmJ7_I4Yr2X3sk9rMA/p.jpeg?size=2048x1536&size_mode=3"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABABSTh1oFe9dn9_8HN3tZJ1KoJk0geDAmEhXXZ3eKCFtnJ-O-zmgIS4F7L4Tlz2AMokNmMqW3K0nL62_L9Hl52HHcq6rdj9VeB6yTfV2UhDbmM9MLPQqIfETO9XLBu09dPorfZr300fpvDz3rv2r7eDhbcxtC0AMctBAxxe6akbUJamYy_0-RwnJjFR3ZPJCAHRP__pXBRzA4WDNawQJt4_UN9Li477K7BbAo0ZpmldMBTCNB27s6rN1u9aBt0-8LUSJWzCMJFy9mTkokfpK_zkl3OwZDCx8-39jZ10yz9Fj-hk1HLriS9pVTd_yfRhPW3uHnX1nNabEIKFM2A2nW5BRuap2L47Sm_PgPxGFCYYwg/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABAoLsBTTLq6K9-3zS4ZMY1zziNyx0OkfSRwYG3DyHTJlFqJvl2B_YmUHbJvhCJSp343R_dV2lWV7dmjNJpCiBZJ88kEJyezJTq1nYjChkj7CPA2uSn_JKBFWMihnqcr-3aN6BOxxv_ejy3BJlhAoGu4fURbU71rf84PIu1VD6BjTekV6SSEJFEr-agF-4bmdu5aZzgtZsz6ge2NE6TEpTnwQP0RgrWRv9blzBWlFiiRAa0wrWEYKCd_weLefuSLLhjEgm5HOumtbstd-eiZBkyMb415fFMXzAEDgmNUaEyjG9pwAUFxiEX77NqppNgheGMqEYPVXTrbNUWdGexzVi8gpeqZkrUVb5AJs4oMue4W9Q/p.png?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABBTxmAufGL06_UdUcrlJBA5wZ3PR2fLC7zX38pOaGkjii1fQ8SmHzFsIg_exeS2LMi3DwWcbhEugvBvgZW2RkAlREz04XxYrBaymFAW6PhS7lW5ypbRpufZe7b8o6fxNrfSYUzwtda2_F_8XKOMZ1tCFA8xuG55LuBom6v1VI4GcVNGMkwbK5dEFIxgCGwNMB_WJO7CfKnna-6T6MA_lEKwl7oHulR3jRlRsfVdI8d61G0ggLP8Z-OGptTBfadqVQMQz6LZ0UmtgNSM-maJRSRXxr343X-Ny9TPs0FggygidAXK6OcqEhjPzseNgvG7Bri72f9JXoMjLYzZc7J4ooWdxw5EU6enxkrvZuzbSae2VA/p.jpeg?fv_content=true&size_mode=5"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABB5qz2H0uakZnlcpYYFqjzFE1SbCFmfm0vEu7-3CZHEPkgOB4u6oEuTpIqdbB_Yn3WwrMgiJT_73wg2opPDYqhNKE_Y2TgLXRPF7dSJeyqbBvO_1b78S1J-4PWobTaL82hMU50Z_qmZfQN_nQTgZJE0VfpDZf5yvTZD1PcE_oEXYjQyeEiCBmqXXi19s07WGdLNSw5DhJrVEaeEac5MhHbBwvRNw6QLtI2TmbrAnkMe0b2lhdJTuHIILxnxr5HmNXCstv23Wq4ybUDQ8s9TW5Nn9Tec1oz1oEyiVCjoGtOC2NCgNfQyAadauAaFStR8EywA4qO53ClGiRrfrTRTWIHSPHVomF1u10MwDlNFj-msSjuLqH51-31t7-P7hUJD6DpcDmc1flLdzk_qbqlntLu6SAJWWlJbgO7uAMdWvuHiug/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABD0Cru4hgXfNjin1kQVJO6-TFZdWAXCercCTxuIhVr2Q-mIMM08Pv1ynkA26YJwJHmwfMrNVulU3CLCNANajvjezJ8Oek_Pk24NexLcbYQH8zduAP2NvQaG5b0ddhVl7vLJHxdaxGV3l0QICTFiIwboMRaXQj8aJcgJSIND50HKSoJjAzPtJuTeuCBI4I9w9gQl-S-Igf3IPRp6-HRiOqBCQABamAetdwoIPw5j5UaK1I-AESTDwQU-d_U9X_xvypUvhzpAPgZlMn-BOUaOGtHswW3omoLMOhZbJaLAs7u6Uztg1kE0KHek8Kga2ebaHXti0n1N2t4rj6W7iS8QXDYbN7sEEvZi312D9to3-oduRg/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDI8IILpmzrS8-VIZZYp-eS6W-m7j9IQ99LbqrGplUegUKMPnqPFjD3bQ19ajkFfW9QnvXq1IfN5B0Bbo2LIAkRsiP0lEo4w_ajKUJhlalOkHhQiGROud_HtM88fqTg0-gbNFs9OM2m0ChcGHNTrdBPxWjEmcIJ370ASsTZZnIK4dg87pAhVl9hJ98tmu1KP4Sio2QQa3fo-tKF2F9xf2fXvZ3jKlWw2WBjRkxfkFNwKURMIHiz8QuoIlq7AyTsX3rcu-_CmhH7V-RXTpjwbwITG691dur7Jsvz3AJyg4zHOH82n-OYn7yUkEx8tpXakz-J1mPf2rCvxYoT0KBK0INM8dSzU_LlVLMvT9lxBmCyGg/p.jpeg?fv_content=true&size_mode=5"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABC_k2-R8R7RnOD5_DxSbdKwMbswLDupl_ml7l-SrY6RXa1nNYX7bX5xPbjaT64SqNgfxVXYynLoYaSKD9cC7dM8Te_J-eu5Lv8KbEmbFML6IrUPKSn6Yl6yyoI398_8YO--XKAGBwWOw3p9SRt_boXSmDCP0GKGGq8-CguYDXGfTLv_GpWHsj2e9gc77Q-9y0_vJc7kxc302EViRhWbjSSXtMvav77IZtkwhdnxzvCL8R8-W6CvbGkj3-IQHAncrgDhucKOXfhCqnP83EtE8a3x1yXFpQsmcWT2gjyVpe3x54o0bmaJrASUUZRrOKTEppxPujTC9RwbJct_D6_Y37C38XRS-LtwcBNmtozyUemF0g/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABBTh27H_Awu1uIXe8flUzCO1_9zrwqU1ePuJbadrmuwmmG_m3L75k_JUIJmgtERg_lLpGqpe92vFhI4qM9C1v_6rHFoAsBzC3h4j-L228_FJctQBwB3RbgMILwn2HR0MU99d5WuPb1d7Vgfhid4BYocUxZFjTMns8sRlcRl1kDSxLLlC2DpHFF8HrUOPPFTIasZpvWP6-empcOmcFsqON2gUkuA2zwNUEgCdcvVwyfLFNaHekjB5xmW6ZF7MrcAXZCSKApOnzf5NMc4XHHCcAW843xWOMuQpILXDBGkv9-6HPIiGZjns1h2KTsMUdx42NFBHXnQEyKFZAezU1YVrFZYLCoiJ4Mnal_-MSc31gWX6A/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABBSK0DdO8H-me9Mn855n8f88JHWoCmaIGF_A7Q1dc6vEu99C6D4ddtPSM0s3m0ADWYpZxynjN-UBWvm83QWt_0_bGE1VUYW8lhNo25PIzgDHW7fJ3-qVrFCdIo00vcfYDnGDDbersC35eRoC4ubxc6N7NZG9GISzoeUpAoy_JrgX3WMAGBhQVncY6YsUm5pb_HLzMZgPvIC3qfuM4rvxgQOxVUgw4zU0mUKMwFPVsVeyyRA2xkA9_7gKL5uoctdQLXeOCZn_BTSi3DrRArPLex7nkLeZRYNaJoKtDQb6BKxS2nVrNWzEiTXfoM084dVPRyRYwRcEImdCUcscI3tm808kGVbd6QR93ttSTZEIwTbzg/p.jpeg?size=2048x1536&size_mode=3"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABAleKGN4HyatbmgKlWkZgvZciHJsB-RTPPLgXoHlXfe0Cgtqlwt8e1ZY8mprSJkls3-nMBbJDJc88tJs8RG_Rjqh3KdPwSJwirtwJSaMrnz067Ps_w5J5UVawNU_ETonvaxLDXJb9EAoFCmnsDAZXlPOdBMrXoM7fqMGEA_-zsst4yL_40SqEO4s0KHWEQj1uxV5HaorsroBosAtsrflXkHhJARcVbmODmJgrf2kB3UO3bO4vVbLAcPLtBGfyaHWScSL47aUT6rmLAJTsBPkN7xTrWtyvW7wZN7dPSsfAP6tp0xSvryhEzEDR10fMYZrsNq6pRdUgWIj5DULLtZ_GD2WLw0iMKMjyg90lNsbaib0A/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABCJYSvoTfNDVDkm-YP0XRCoe-BanbA8F434WPaIkz6yOKj4qXJGBmPqsYIAIK5XTJ7mw8WbgPC9sSUQe6NHnzXkhVTsoigeg6wioBd0J4ficCm7dtrSLJOODFy0HR-1di_qqjXkfsDUZzA-l_y-rQhcUidb_kTsNTptwZjxJ9DmkibIKpjU0hXOwhyykhH2yF7cUipwYuo55trHtRo2N79l-G9XFK6yQfKzL6MF5AAFAy2dq8RAB_H2EucaSWz9blFbOQ7sfZCoX602bgI6XRFpie9bPOkV0qMHvEppQk3NF0OS7bH4miOD874H-zp7gRBAcoQPZNjzq6giqYG93IEreXevNkkMWTfqJX5GmzUKgA/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABC_df2aIwyz-MG1ej82y7zO-ZnvcVCOrWRodmETYox51C8_Af3qeosi9Lt-FSbBb3gTFZPnp08cyTjT0xJB_bisPckbZh8_RRjXKD3I2pjSJ4jqLPehBjytSIqZ9NxFlTSsnJl80boo22Siz7ngO1MpZqWhaJBWsGI05-ozt2x_gzTcTQtgoiIjvDkvo4sAfrAsSQdPKVNxIT5C1TxBJSr5MPl_TYmZadFQyM3Q93eMiBgylkg_XpxJ7l8UowIPPAuDmbJozC7HWwvKPCWmHAVxTnRbR9XW1Z9MnIMXcGGruEIse2cefUbedA6RUjC_1vbNUWAGvrIjcg3-owUNc5fyawjuuqua11UC5P1C0uzDjw/p.jpeg?size=2048x1536&size_mode=3"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABBQ6QmVrjPozbMs18eVm3DhEIKchHOp3cOEG7FaRwJDdh93ZK1fQp6KlQKDN0_DJ0Ek_8dkgMxJ-PyMxC1wlGHIvFP04N8qgjjZfI-ljwg970BT8S6qyR4FZVcrhKGW7oWmdwMWQRhYFBThMfpChyc2nlLkpsjRJ161fRRVBf001ixOuG2UkTX0T5LtqQcqYnPxiB_J3CT71zQqC2GdxCDrVxpU7eCYX4skvK9LL5KrWLulDUXILwpKSrbJbeUkKEaj65XYfc83h7KPjr-Va06pv0mzVEi06GEn_zgKuPtaQpzlY4OfWEK7vFfOZ7G3PwJscE6GH2OcfChLQbu_4lvAvevmHXFbzNQMwO8gblLiSA/p.jpeg?size=2048x1536&size_mode=3"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDhqwauBPIg24hFPyCKlD-_vlKcwJyw4IUlunhAbgaNeTkieBLa6xqjqSTp-LnkcJxirW_gaYleDXpmbjxNGt1XVXqxyVfGV9YIyEj61GoACteQRuDqj3TnFYLAHtrCXWgK0eg7EuZ2fVbaMwXoBByBYdOwBKhzLE6bTs3-VebIGVvFr5-k9VGboprDwW0lBHhgKLZjQH-VxY-YEPMYoCP7dHixM19L5Mosho2j_CiKkFPlwq7KHjCIiGmwN69kA6bLuLW6XkyayZQzhEHXG3JxFIL6w6p8ac1_sENEGmMU-uuqyPbuPHJUxfaQX3CFkBPez9EAJzZkVD-dgOHvUVigcuoXoVUXK2fsR8xvX_8ypA/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABAyXnutsSqQiitk0iVpqLx8tVZ2ErtHncR9LuzqrmTbTh9A2OQYwlR5TGbH_7WFFM0zR-3ZI-LAV_15KFu9OYPO-QlBglmuTrxVs_TDPH_opXZO3Wy97nOYqwxQNM33hb1zIjNtM9PqY6uaFnYGRHagBe3UXU48W66y09A9f7kLBfkEQYr23UdW3d_pL0UHp9E8Njnyc2TMBUuwXnInklGRTXa_vA43-AlFBftt5aFkEQH8THNadFUahAhhfAjfZiHrLuzT9r7lHFWPn_gY0nKdLhEMsvIKrm4lwlZ-RJdYUvpu2AkfTrB_W3Rrohv38wuzoRmglKrEL3H9_VQAHVBEehux07gMA4jIWpnFD9D5AQ/p.jpeg?fv_content=true&size_mode=5"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDA1kE7qLmP_qgbkzWGdiI9py_Ygq23Hh3ZSe9sACHKoby4OT6mp3cvKbbyio1uapqP4qCpA7hCM2VXzFRLi1BeF3YYZVIKABDyUs-hrozjomO-R0GZROZuAc0zAJNUh4dzBr6MRgvjxxZxQthqwHNiraR_jFP1a0ZUSwe-0ol34QoriZ2rQBIQTOeKs7MKXeC5RSVMD6y8iYqyy8kfLDIxVSpd_E1sKNSZfKnWUlF2N0gjV-l_L06NURJfJtIDWm2zwzJVH6I-9VD8iVoVy1uKNtezuzTBF66PNgF4pqIrJKLaSU2amdrEaIsUp15OlVPRxHGSwMsMHnXSRawxBcnzIrx4tnWW2b7K08_MR9Z5mg/p.png?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABAMCLgnEdTG2wpqDE6YQvgvVZF1Z0ZKRR8uRtXaZbbhdMRNn_s8QPlxr_F1Z63jKpPWHGHddnzpkPVtFUoMRKulsCBr6EZdfTNUKhdlO8z5GToRWHlAFSyv7TtDYPZZrn7zF6bBhDiWvdVUnfVudymSp5pF6AcAmZTibVPX8wt-e7u3u71NcM-f3gLqqaMDtu4KY-qW9V7ypGuQHGv1rOfG3c0DjIKEyVAssiRCLXQt6vtfXCPcGgz4GXLXgbDxTArlwx4_f_1jQd-ad5YMsNrAV3fCK2lket2aVpwYGxCE_bQfQHNsl1HCEgMjfYftYozQ8WS8sfG_KPvJ5eGMUj3RaP6lNIKiL16vUT7DFHEd3g/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABBrXxIHLNLi7ixKxHltut-mfW4H_clblKraxlBijU16_FZS_mKwFBAp0toBa3k81OSTkPp-cTzDjIYdQQu96nKsmm9NdHq8ddW2upY4QqEF8uHkanTHgfQVajuGI1Fle6Od4pb5U7SO-HnJYIBOVlS9JpGRVGl9omTNMbzP0Hf6N0jxtt2d-o7uiOe1aQn5gUtz9dnC01LRZtNWOZiFWCoS2WREAqQKZ7I89k8FK2DfT_kfQLaQywqbP2nTksSMxGFR_IJXTsiKX39JBRoladd7bYbHb_rIBrMT8HCaMKfyXOrc5WUjGmzBPig_SPJ7d2tIgNfUD6l-kFZ6QER7DsSL6F8DqSqOl577Ou548yQFbw/p.jpeg?fv_content=true&size_mode=5"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABClRrYZOZgnjNnw2rsMijpnq-XZrDC0SI5RqAysQXQVmvXHg4OhRJ_YVpM0p-9eyamRVpGO-KIO-2TDwzcSYAgYN0HHjGxlXwtNDq7eLC089VEQUo5-n3dGuB2EIMUfBTAz1cdPewlXyKs-4VyfXCZq6_CST1Lif1UyT6mgM_LDzUS-RTjlT-ODOivFHcVRy-KtzH2p9xvrvz0tQOyDU_1EH1NKbqoWMeZAvt6DHnQ9w0ONJ0edTUofdlPgp7NfFORhUMkhUnjCL8R2LEVGhPE7OzaeRifC67Xcav0xvTR4KP5mqLKRqrT9jVS5V47DuKer9jCchNgBIXqbVrD35LP3UXhlST6_ShK5DWg1wK2Nhg/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABAqbnsdP9AIYaaCRYd49oNGF6QOAqMN06nLtXavhDBlwLMSlw2NEDQwgUPe3-8feNtEbftlUJMk2XpSPjNYTz01KNgeFHKobq7zC3FLcZnxKh0FoYXbtJHUYaNjlNvBlxZyRyCUnOXF3vzcDTxyi7DsRf_iN_p6CjlVu3CagN1kCbVCq6Ubd23Z0axKizsd76gxntNLYlsgpt64CxWlwNzoxVESaWYQRre9F7bs2QpRySWtXHiqsZblSbeFvSGRRVcdpxK0SqEO0V96POJHGmuJge3NwkmDGPqwsah1758o0520eF5Nx6rAXblRFdt9q5O-MAaKnz0sqxykVprBKyN8ZGFE2VodbxZZfDcx0Jf-Pw/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABCxLU0V6FH7XITG8Jbfwh8A0smKVdRC41vXvu5iMY4OQUycq8qMn5WZ4gC1MvpVX-RBR7Jabc40pvsb_JwxCE-u8zywkazn8Bm6z4IfKXpEzGJcVGXS_BBY3YiAN7DFMPYRNNDMD9pBsikht4TqMXMpQNYp_xB2hiQs7-RQqLDpk1gGgoM_0IrYPpMOFUEMbajtCvXC-pgM_Ko9gq_aIa4lqWUYuqjpvzDv-rui_T4PgcXSegsQa3zEThBfvukUG7oTLsgSsZFHkeOmYnky4m8Zeqz7SFmXGxajOzJheECQkrTeU1c9aZIw0jrA81LFPBM9Aw67Kk3LeXJh31_b_KHQxsE4fMQ_y7nUhyZkG16jIw/p.jpeg?fv_content=true&size_mode=5"
        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDelmP1rjDZyAofThJbK-tZZB5GZgheZLvxTD7BPV3aWYJQuauHNkue8Myb_w4R1BvzxdKcSyq8XcbNgga1XvPOT7SM2d1abZ3j9Etq79W_q_MrQcA0bHkHTVqS8bYhdEMM-amg2RiRV6KRxIBv-SJPlkWrfIYiSoR26cnMMfOwMN_b5HezvvGML-obfoPuKPmS0wAy_GoCJbd52yaQ1D85qqbpjRbG6a51WFiKvHV6855yKGc9gvwfq3Mr_nYJkBVwXZ3stz2y7XR4EDbG7jN1MYaOTGjFWO8p5KRwnBcC708CqTUe4GWsLf-cDiYyOBFH9K7IOV3e35QOFmmeMQ5FTMwQWamjV3sUy8EraVCcDg/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABDwf2UJC-CgiDlu15F8ejU2hGqRf8c1jQtMkDdXc5VumbxioUJuGqOo5z9RwnCbCwd7H1USdYdz6zljrtEOmSFg1MDQNtXGXnRg3XoLXqgDpCH2HTFuqC8qlmdqkxQMoP2VZI2Cr_GskQsHpehYgb04dAbb287LRkzaaC0Fl8rrW3_2_1OjFTBY38V3jrOfzTWggVv9U2aPkG0qmwWEgX7JYeu_7NqIkkCP-dAObtVdDk3UHsuvaQltVe48zC4O0o-TYIQjZoPzbdkgWdXrpEYjJjk5awiAjGbUv8vdLSdPN0eZ6sbtJ9pGSuaDTZqx4HprF-2ifZr0e7N4zfHuy9Wju_BZ0nJ8Pg-Wj6IfGI9oRA/p.jpeg?fv_content=true&size_mode=5"

        }, {
            URL: "https://previews.dropbox.com/p/thumb/ABCEEEAwjPh1QHOkTj4VXsPxR6iHchXxA1v5wHGqGggwIJpteoMJTQWTubGDE--UqfjyWDFJ52rUnKLs00rqBL3hrP1oItOaexuqUhWDLDgw5KKxvwhgsyj7muVM9dToX1vQQ_UNlmZzzZ5I6WkmHXN-n89H1OwscyhDGsw2esR9t-ITscNxIb94qhXyuzXQ0YDzdVPWwdHtWKTgq9SMuOpGBWUPiE_1KRX0S3KDwCcoskd2zHLcgjKNLahcwIN_x5k2GrveITupw36p2AzccL5Iv3Ks_P_up8XPAEMRanhadIGv7m_lEjyXYliQc_utOJNV093Ux0x4dJlp6nc70O7oblWhXtJwDenAFJphh1psbg/p.jpeg?fv_content=true&size_mode=5"
        }
    ]

    //if local storage is empty, load a random picture
    if (localStorage.getItem('babes-favorite-things') !== null) {
        console.log('loading Existing')
        loadExisting()
        //if local storage has data, load data fromn local storage
    } else {
        console.log('loding New')
        loadNew()
    }


    function loadExisting() {
        currentURL = localStorage.getItem('babes-favorite-things')
        $('#new-pic').attr('src', currentURL)
    }

    function loadNew() {
        var i = Math.floor(Math.random() * pictures.length)
        currentURL = pictures[i].URL
        $('#new-pic').attr('src', currentURL)
        localStorage.setItem('babes-favorite-things', currentURL)
    }

    $(document).on('click', '#new-pic', function (event) {
        event.preventDefault()
        loadNew()
    })
})

