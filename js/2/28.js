	// Definition der Variablen fÃ¼r das Formular
    var Zahn_28 = 1;
    var Furkation_28_b = 0;
    var Furkation_28_dp = 0;
    var Furkation_28_mp = 0;
    var Implantat_28 = 0;
    var BOP_28_db = 0;
    var BOP_28_b = 0;
    var BOP_28_mb = 0;
    var PI_28_db = 0;
    var PI_28_b = 0;
    var PI_28_mb = 0;
    var BOP_28_dp = 0;
    var BOP_28_p = 0;
    var BOP_28_mp = 0;
    var PI_28_dp = 0;
    var PI_28_p = 0;
    var PI_28_mp = 0;
    var mg_28_db = 0;
    var mg_28_b = 0;
    var mg_28_mb = 0;
    var st_28_db = 0;
    var st_28_b = 0;
    var st_28_mb = 0;
    var mg_28_dp = 0;
    var mg_28_p = 0;
    var mg_28_mp = 0;
    var st_28_dp = 0;
    var st_28_p = 0;
    var st_28_mp = 0;

function clear_data_28() {
    if (Zahn_28 == 1) {
        mg_28_db = 0;
        mg_28_b = 0;
        mg_28_mb = 0;
        st_28_db = 0;
        st_28_b = 0;
        st_28_mb = 0;

            document.getElementById('mg_28_db_txt').value = 0;
            document.getElementById('mg_28_b_txt').value = 0;
            document.getElementById('mg_28_mb_txt').value = 0;
            
            document.getElementById('st_28_db_txt').value = 0;
            document.getElementById('st_28_b_txt').value = 0;
            document.getElementById('st_28_mb_txt').value = 0;
        
            document.forms[0]["st_28_db"].style.color = 'black'
            document.forms[0]["st_28_b"].style.color = 'black'
            document.forms[0]["st_28_mb"].style.color = 'black'
        
        mg_28_dp = 0;
        mg_28_p = 0;
        mg_28_mp = 0;
        st_28_dp = 0;
        st_28_p = 0;
        st_28_mp = 0;

            document.getElementById('mg_28_dp_txt').value = 0;
            document.getElementById('mg_28_p_txt').value = 0;
            document.getElementById('mg_28_mp_txt').value = 0;
            
            document.getElementById('st_28_dp_txt').value = 0;
            document.getElementById('st_28_p_txt').value = 0;
            document.getElementById('st_28_mp_txt').value = 0;

            document.forms[0]["st_28_dp"].style.color = 'black'
            document.forms[0]["st_28_p"].style.color = 'black'
            document.forms[0]["st_28_mp"].style.color = 'black'
        
        change_probing_28();
        
        beweglichkeit_28 = 0;

            document.getElementById('beweglichkeit_28_txt').value = "0";

        bemerkung_28 = "";

            document.getElementById('bemerkung_28_txt').value = "";

        Furkation_28_b = 0;
        Furkation_28_dp = 0;
        Furkation_28_mp = 0;

            document.getElementById('furkation_1_28_b').style.display = 'none';
            document.getElementById('furkation_2_28_b').style.display = 'none';
            document.getElementById('furkation_3_28_b').style.display = 'none';
                
            document.getElementById('furkation_1_28_b_tab').style.display = 'none';
            document.getElementById('furkation_2_28_b_tab').style.display = 'none';
            document.getElementById('furkation_3_28_b_tab').style.display = 'none';
            
            document.getElementById('furkation_1_28_dp').style.display = 'none';
            document.getElementById('furkation_2_28_dp').style.display = 'none';
            document.getElementById('furkation_3_28_dp').style.display = 'none';
                
            document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
            document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
            document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
            
            document.getElementById('furkation_1_28_mp').style.display = 'none';
            document.getElementById('furkation_2_28_mp').style.display = 'none';
            document.getElementById('furkation_3_28_mp').style.display = 'none';
            
            document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
            document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
            document.getElementById('furkation_3_28_mp_tab').style.display = 'none';

        BOP_28_db = 0;
        BOP_28_b = 0;
        BOP_28_mb = 0;
                
        BOP_28_dp = 0;
        BOP_28_p = 0;
        BOP_28_mp = 0;
                
            document.getElementById('BOP_28_db_rectangle').style.display = 'none';
            document.getElementById('BOP_28_b_rectangle').style.display = 'none';
            document.getElementById('BOP_28_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_28_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_28_p_rectangle').style.display = 'none';
            document.getElementById('BOP_28_mp_rectangle').style.display = 'none';
            
        PI_28_db = 0;
        PI_28_b = 0;
        PI_28_mb = 0;
                
        PI_28_dp = 0;
        PI_28_p = 0;
        PI_28_mp = 0;

            document.getElementById('PI_28_db_rectangle').style.display = 'none';
            document.getElementById('PI_28_b_rectangle').style.display = 'none';
            document.getElementById('PI_28_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_28_dp_rectangle').style.display = 'none';
            document.getElementById('PI_28_p_rectangle').style.display = 'none';
            document.getElementById('PI_28_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_28() {
    if (Zahn_28 === 1) {
        Zahn_28 = 0;
        document.getElementById('tooth_line_28_b').style.display = 'block';
        document.getElementById('tooth_line_28_p').style.display = 'block';
        
        document.getElementById('beweglichkeit_28_txt').style.display = 'none';
        
        document.getElementById('implantat_28_btn').style.display = 'none';
        document.getElementById('implantat_28_tab').style.display = 'none';
        document.getElementById('implantat_28_b_image').style.display = 'none';
        document.getElementById('implantat_28_p_image').style.display = 'none';
        
        document.getElementById('furkation_28_b_btn').style.display = 'none';
        document.getElementById('furkation_28_dp_btn').style.display = 'none';
        document.getElementById('furkation_28_mp_btn').style.display = 'none';
        
        document.getElementById('furkation_1_28_b').style.display = 'none';
        document.getElementById('furkation_2_28_b').style.display = 'none';
        document.getElementById('furkation_3_28_b').style.display = 'none';
        
        document.getElementById('furkation_1_28_b_tab').style.display = 'none';
        document.getElementById('furkation_2_28_b_tab').style.display = 'none';
        document.getElementById('furkation_3_28_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_dp').style.display = 'none';
        document.getElementById('furkation_2_28_dp').style.display = 'none';
        document.getElementById('furkation_3_28_dp').style.display = 'none';
        
        document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_mp').style.display = 'none';
        document.getElementById('furkation_2_28_mp').style.display = 'none';
        document.getElementById('furkation_3_28_mp').style.display = 'none';
        
        document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
        
        document.getElementById('mg_28_db_txt').style.display = 'none';
        document.getElementById('mg_28_b_txt').style.display = 'none';
        document.getElementById('mg_28_mb_txt').style.display = 'none';
        
        document.getElementById('st_28_db_txt').style.display = 'none';
        document.getElementById('st_28_b_txt').style.display = 'none';
        document.getElementById('st_28_mb_txt').style.display = 'none';
        
        document.getElementById('mg_28_dp_txt').style.display = 'none';
        document.getElementById('mg_28_p_txt').style.display = 'none';
        document.getElementById('mg_28_mp_txt').style.display = 'none';
        
        document.getElementById('st_28_dp_txt').style.display = 'none';
        document.getElementById('st_28_p_txt').style.display = 'none';
        document.getElementById('st_28_mp_txt').style.display = 'none';
                    
        document.getElementById('BOP_28_db_rectangle').style.display = 'none';
        document.getElementById('BOP_28_b_rectangle').style.display = 'none';
        document.getElementById('BOP_28_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_28_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_28_p_rectangle').style.display = 'none';
        document.getElementById('BOP_28_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_28_db_btn').style.display = 'none';
        document.getElementById('BOP_28_b_btn').style.display = 'none';
        document.getElementById('BOP_28_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_28_dp_btn').style.display = 'none';
        document.getElementById('BOP_28_p_btn').style.display = 'none';
        document.getElementById('BOP_28_mp_btn').style.display = 'none';
        
        document.getElementById('PI_28_db_rectangle').style.display = 'none';
        document.getElementById('PI_28_b_rectangle').style.display = 'none';
        document.getElementById('PI_28_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_28_dp_rectangle').style.display = 'none';
        document.getElementById('PI_28_p_rectangle').style.display = 'none';
        document.getElementById('PI_28_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_28_db_btn').style.display = 'none';
        document.getElementById('PI_28_b_btn').style.display = 'none';
        document.getElementById('PI_28_mb_btn').style.display = 'none';
        
        document.getElementById('PI_28_dp_btn').style.display = 'none';
        document.getElementById('PI_28_p_btn').style.display = 'none';
        document.getElementById('PI_28_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_28_b').style.display = 'none';
        document.getElementById('polyline_an_28_b').style.display = 'none';
        document.getElementById('polyline_mg_28_b').style.display = 'none';
        
        document.getElementById('polygon_28_p').style.display = 'none';
        document.getElementById('polyline_an_28_p').style.display = 'none';
        document.getElementById('polyline_mg_28_p').style.display = 'none';
        
        document.getElementById('polygon_inter_28_27_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_28_27_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_28_27_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_28_27_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_28_27_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_28_27_p').style.display = 'none';            
        
        document.getElementById('bemerkung_28_txt').style.display = 'none';
    }
    else if (Implantat_28 !== 1) {
        Zahn_28 = 1;
        document.getElementById('tooth_line_28_b').style.display = 'none';
        document.getElementById('tooth_line_28_p').style.display = 'none';

        document.getElementById('beweglichkeit_28_txt').style.display = 'block';

        document.getElementById('implantat_28_btn').style.display = 'block';

        document.getElementById('furkation_28_b_btn').style.display = 'block';
        document.getElementById('furkation_28_dp_btn').style.display = 'block';
        document.getElementById('furkation_28_mp_btn').style.display = 'block';
        
        document.getElementById('mg_28_db_txt').style.display = 'block';
        document.getElementById('mg_28_b_txt').style.display = 'block';
        document.getElementById('mg_28_mb_txt').style.display = 'block';
        
        document.getElementById('st_28_db_txt').style.display = 'block';
        document.getElementById('st_28_b_txt').style.display = 'block';
        document.getElementById('st_28_mb_txt').style.display = 'block';
        
        document.getElementById('mg_28_dp_txt').style.display = 'block';
        document.getElementById('mg_28_p_txt').style.display = 'block';
        document.getElementById('mg_28_mp_txt').style.display = 'block';
        
        document.getElementById('st_28_dp_txt').style.display = 'block';
        document.getElementById('st_28_p_txt').style.display = 'block';
        document.getElementById('st_28_mp_txt').style.display = 'block';
        
        document.getElementById('bemerkung_28_txt').style.display = 'block';

        document.getElementById('polygon_28_b').style.display = 'block';
        document.getElementById('polyline_an_28_b').style.display = 'block';
        document.getElementById('polyline_mg_28_b').style.display = 'block';
        
        document.getElementById('polygon_28_p').style.display = 'block';
        document.getElementById('polyline_an_28_p').style.display = 'block';
        document.getElementById('polyline_mg_28_p').style.display = 'block';

        if (Zahn_28 == 1 && Zahn_27 == 1) {
            document.getElementById('polygon_inter_28_27_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_28_27_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_28_27_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_28_27_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_28_27_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_28_27_p').style.display = 'block';            
        }

        if (Furkation_28_b == 1) {
            document.getElementById('furkation_1_28_b').style.display = 'block';
        } else if (Furkation_28_b == 2) {
            document.getElementById('furkation_2_28_b').style.display = 'block';
        } else if (Furkation_28_b == 3) {
            document.getElementById('furkation_3_28_b').style.display = 'block';
        }
        if (Furkation_28_b == 1) {
            document.getElementById('furkation_1_28_b_tab').style.display = 'block';
        } else if (Furkation_28_b == 2) {
            document.getElementById('furkation_2_28_b_tab').style.display = 'block';
        } else if (Furkation_28_b == 3) {
            document.getElementById('furkation_3_28_b_tab').style.display = 'block';
        }
        if (Furkation_28_dp == 1) {
            document.getElementById('furkation_1_28_dp').style.display = 'block';
        } else if (Furkation_28_dp == 2) {
            document.getElementById('furkation_2_28_dp').style.display = 'block';
        } else if (Furkation_28_dp == 3) {
            document.getElementById('furkation_3_28_dp').style.display = 'block';
        }
        if (Furkation_28_dp == 1) {
            document.getElementById('furkation_1_28_dp_tab').style.display = 'block';
        } else if (Furkation_28_dp == 2) {
            document.getElementById('furkation_2_28_dp_tab').style.display = 'block';
        } else if (Furkation_28_dp == 3) {
            document.getElementById('furkation_3_28_dp_tab').style.display = 'block';
        }
        if (Furkation_28_mp == 1) {
            document.getElementById('furkation_1_28_mp').style.display = 'block';
        } else if (Furkation_28_mp == 2) {
            document.getElementById('furkation_2_28_mp').style.display = 'block';
        } else if (Furkation_28_mp == 3) {
            document.getElementById('furkation_3_28_mp').style.display = 'block';
        }
        if (Furkation_28_mp == 1) {
            document.getElementById('furkation_1_28_mp_tab').style.display = 'block';
        } else if (Furkation_28_mp == 2) {
            document.getElementById('furkation_2_28_mp_tab').style.display = 'block';
        } else if (Furkation_28_mp == 3) {
            document.getElementById('furkation_3_28_mp_tab').style.display = 'block';
        }

        document.getElementById('BOP_28_db_btn').style.display = 'block';
        document.getElementById('BOP_28_b_btn').style.display = 'block';
        document.getElementById('BOP_28_mb_btn').style.display = 'block';

        document.getElementById('BOP_28_dp_btn').style.display = 'block';
        document.getElementById('BOP_28_p_btn').style.display = 'block';
        document.getElementById('BOP_28_mp_btn').style.display = 'block';
        
        if (BOP_28_db == 1) {
            document.getElementById('BOP_28_db_rectangle').style.display = 'block';
        }
        if (BOP_28_b == 1) {
            document.getElementById('BOP_28_b_rectangle').style.display = 'block';
        }
        if (BOP_28_mb == 1) {
            document.getElementById('BOP_28_mb_rectangle').style.display = 'block';
        }
        if (BOP_28_dp == 1) {
            document.getElementById('BOP_28_dp_rectangle').style.display = 'block';
        }
        if (BOP_28_p == 1) {
            document.getElementById('BOP_28_p_rectangle').style.display = 'block';
        }
        if (BOP_28_mp == 1) {
            document.getElementById('BOP_28_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_28_db_btn').style.display = 'block';
        document.getElementById('PI_28_b_btn').style.display = 'block';
        document.getElementById('PI_28_mb_btn').style.display = 'block';

        document.getElementById('PI_28_dp_btn').style.display = 'block';
        document.getElementById('PI_28_p_btn').style.display = 'block';
        document.getElementById('PI_28_mp_btn').style.display = 'block';
        
        if (PI_28_db == 1) {
            document.getElementById('PI_28_db_rectangle').style.display = 'block';
        }
        if (PI_28_b == 1) {
            document.getElementById('PI_28_b_rectangle').style.display = 'block';
        }
        if (PI_28_mb == 1) {
            document.getElementById('PI_28_mb_rectangle').style.display = 'block';
        }
        if (PI_28_dp == 1) {
            document.getElementById('PI_28_dp_rectangle').style.display = 'block';
        }
        if (PI_28_p == 1) {
            document.getElementById('PI_28_p_rectangle').style.display = 'block';
        }
        if (PI_28_mp == 1) {
            document.getElementById('PI_28_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_28 == 1) {
        Zahn_28 = 1;
        document.getElementById('tooth_line_28_b').style.display = 'none';
        document.getElementById('tooth_line_28_p').style.display = 'none';

        document.getElementById('beweglichkeit_28_txt').style.display = 'block';
        
        document.getElementById('bemerkung_28_txt').style.display = 'block';

        document.getElementById('implantat_28_btn').style.display = 'block';
        document.getElementById('implantat_28_tab').style.display = 'block';
        document.getElementById('implantat_28_b_image').style.display = 'block';
        document.getElementById('implantat_28_p_image').style.display = 'block';

        document.getElementById('mg_28_db_txt').style.display = 'block';
        document.getElementById('mg_28_b_txt').style.display = 'block';
        document.getElementById('mg_28_mb_txt').style.display = 'block';
        
        document.getElementById('st_28_db_txt').style.display = 'block';
        document.getElementById('st_28_b_txt').style.display = 'block';
        document.getElementById('st_28_mb_txt').style.display = 'block';
        
        document.getElementById('mg_28_dp_txt').style.display = 'block';
        document.getElementById('mg_28_p_txt').style.display = 'block';
        document.getElementById('mg_28_mp_txt').style.display = 'block';
        
        document.getElementById('st_28_dp_txt').style.display = 'block';
        document.getElementById('st_28_p_txt').style.display = 'block';
        document.getElementById('st_28_mp_txt').style.display = 'block';

        document.getElementById('polygon_28_b').style.display = 'block';
        document.getElementById('polyline_an_28_b').style.display = 'block';
        document.getElementById('polyline_mg_28_b').style.display = 'block';
        
        document.getElementById('polygon_28_p').style.display = 'block';
        document.getElementById('polyline_an_28_p').style.display = 'block';
        document.getElementById('polyline_mg_28_p').style.display = 'block';

        if (Zahn_28 == 1 && Zahn_27 == 1) {
            document.getElementById('polygon_inter_28_27_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_28_27_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_28_27_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_28_27_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_28_27_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_28_27_p').style.display = 'block';            
        }
        
        document.getElementById('BOP_28_db_btn').style.display = 'block';
        document.getElementById('BOP_28_b_btn').style.display = 'block';
        document.getElementById('BOP_28_mb_btn').style.display = 'block';

        document.getElementById('BOP_28_dp_btn').style.display = 'block';
        document.getElementById('BOP_28_p_btn').style.display = 'block';
        document.getElementById('BOP_28_mp_btn').style.display = 'block';
        
        document.getElementById('PI_28_db_btn').style.display = 'block';
        document.getElementById('PI_28_b_btn').style.display = 'block';
        document.getElementById('PI_28_mb_btn').style.display = 'block';

        document.getElementById('PI_28_dp_btn').style.display = 'block';
        document.getElementById('PI_28_p_btn').style.display = 'block';
        document.getElementById('PI_28_mp_btn').style.display = 'block';
        
        if (BOP_28_db == 1) {
            document.getElementById('BOP_28_db_rectangle').style.display = 'block';
        }
        if (BOP_28_b == 1) {
            document.getElementById('BOP_28_b_rectangle').style.display = 'block';
        }
        if (BOP_28_mb == 1) {
            document.getElementById('BOP_28_mb_rectangle').style.display = 'block';
        }
        if (BOP_28_dp == 1) {
            document.getElementById('BOP_28_dp_rectangle').style.display = 'block';
        }
        if (BOP_28_p == 1) {
            document.getElementById('BOP_28_p_rectangle').style.display = 'block';
        }
        if (BOP_28_mp == 1) {
            document.getElementById('BOP_28_mp_rectangle').style.display = 'block';
        }
        
        if (PI_28_db == 1) {
            document.getElementById('PI_28_db_rectangle').style.display = 'block';
        }
        if (PI_28_b == 1) {
            document.getElementById('PI_28_b_rectangle').style.display = 'block';
        }
        if (PI_28_mb == 1) {
            document.getElementById('PI_28_mb_rectangle').style.display = 'block';
        }
        if (PI_28_dp == 1) {
            document.getElementById('PI_28_dp_rectangle').style.display = 'block';
        }
        if (PI_28_p == 1) {
            document.getElementById('PI_28_p_rectangle').style.display = 'block';
        }
        if (PI_28_mp == 1) {
            document.getElementById('PI_28_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_28() {
    if (Implantat_28 == 0) {
        Implantat_28 = 1;
        
        document.getElementById('implantat_28_b_image').style.display = 'block';
        document.getElementById('implantat_28_p_image').style.display = 'block';
        document.getElementById('implantat_28_tab').style.display = 'block';
        
        document.getElementById('furkation_28_b_btn').style.display = 'none';
        document.getElementById('furkation_28_dp_btn').style.display = 'none';
        document.getElementById('furkation_28_mp_btn').style.display = 'none';
        
        document.getElementById('furkation_1_28_b').style.display = 'none';
        document.getElementById('furkation_2_28_b').style.display = 'none';
        document.getElementById('furkation_3_28_b').style.display = 'none';
        
        document.getElementById('furkation_1_28_b_tab').style.display = 'none';
        document.getElementById('furkation_2_28_b_tab').style.display = 'none';
        document.getElementById('furkation_3_28_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_dp').style.display = 'none';
        document.getElementById('furkation_2_28_dp').style.display = 'none';
        document.getElementById('furkation_3_28_dp').style.display = 'none';
        
        document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_mp').style.display = 'none';
        document.getElementById('furkation_2_28_mp').style.display = 'none';
        document.getElementById('furkation_3_28_mp').style.display = 'none';
        
        document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
    }
    else {
        Implantat_28 = 0;
        
        document.getElementById('implantat_28_b_image').style.display = 'none';
        document.getElementById('implantat_28_p_image').style.display = 'none';
        document.getElementById('implantat_28_tab').style.display = 'none';
        
        document.getElementById('furkation_28_b_btn').style.display = 'block';
        document.getElementById('furkation_28_dp_btn').style.display = 'block';
        document.getElementById('furkation_28_mp_btn').style.display = 'block';

        if (Furkation_28_b == 1) {
            document.getElementById('furkation_1_28_b').style.display = 'block';
        } else if (Furkation_28_b == 2) {
            document.getElementById('furkation_2_28_b').style.display = 'block';
        } else if (Furkation_28_b == 3) {
            document.getElementById('furkation_3_28_b').style.display = 'block';
        }
        if (Furkation_28_b == 1) {
            document.getElementById('furkation_1_28_b_tab').style.display = 'block';
        } else if (Furkation_28_b == 2) {
            document.getElementById('furkation_2_28_b_tab').style.display = 'block';
        } else if (Furkation_28_b == 3) {
            document.getElementById('furkation_3_28_b_tab').style.display = 'block';
        }
        if (Furkation_28_dp == 1) {
            document.getElementById('furkation_1_28_dp').style.display = 'block';
        } else if (Furkation_28_dp == 2) {
            document.getElementById('furkation_2_28_dp').style.display = 'block';
        } else if (Furkation_28_dp == 3) {
            document.getElementById('furkation_3_28_dp').style.display = 'block';
        }
        if (Furkation_28_dp == 1) {
            document.getElementById('furkation_1_28_dp_tab').style.display = 'block';
        } else if (Furkation_28_dp == 2) {
            document.getElementById('furkation_2_28_dp_tab').style.display = 'block';
        } else if (Furkation_28_dp == 3) {
            document.getElementById('furkation_3_28_dp_tab').style.display = 'block';
        }
        if (Furkation_28_mp == 1) {
            document.getElementById('furkation_1_28_mp').style.display = 'block';
        } else if (Furkation_28_mp == 2) {
            document.getElementById('furkation_2_28_mp').style.display = 'block';
        } else if (Furkation_28_mp == 3) {
            document.getElementById('furkation_3_28_mp').style.display = 'block';
        }
        if (Furkation_28_mp == 1) {
            document.getElementById('furkation_1_28_mp_tab').style.display = 'block';
        } else if (Furkation_28_mp == 2) {
            document.getElementById('furkation_2_28_mp_tab').style.display = 'block';
        } else if (Furkation_28_mp == 3) {
            document.getElementById('furkation_3_28_mp_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_28_b() {
    if (Furkation_28_b == 0) {
        document.getElementById('furkation_1_28_b_tab').style.display = 'block';
        document.getElementById('furkation_2_28_b_tab').style.display = 'none';
        document.getElementById('furkation_3_28_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_b').style.display = 'block';
        document.getElementById('furkation_2_28_b').style.display = 'none';
        document.getElementById('furkation_3_28_b').style.display = 'none';

        Furkation_28_b = 1;
    }
    else if (Furkation_28_b == 1) {
        document.getElementById('furkation_1_28_b_tab').style.display = 'none';
        document.getElementById('furkation_2_28_b_tab').style.display = 'block';
        document.getElementById('furkation_3_28_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_b').style.display = 'none';
        document.getElementById('furkation_2_28_b').style.display = 'block';
        document.getElementById('furkation_3_28_b').style.display = 'none';
        
        Furkation_28_b = 2;
    }
    else if (Furkation_28_b == 2) {
        document.getElementById('furkation_1_28_b_tab').style.display = 'none';
        document.getElementById('furkation_2_28_b_tab').style.display = 'none';
        document.getElementById('furkation_3_28_b_tab').style.display = 'block';
        
        document.getElementById('furkation_1_28_b').style.display = 'none';
        document.getElementById('furkation_2_28_b').style.display = 'none';
        document.getElementById('furkation_3_28_b').style.display = 'block';
                    
        Furkation_28_b = 3;
    }
    else if (Furkation_28_b == 3) {
        document.getElementById('furkation_1_28_b_tab').style.display = 'none';
        document.getElementById('furkation_2_28_b_tab').style.display = 'none';
        document.getElementById('furkation_3_28_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_b').style.display = 'none';
        document.getElementById('furkation_2_28_b').style.display = 'none';
        document.getElementById('furkation_3_28_b').style.display = 'none';
                    
        Furkation_28_b = 0;
    }
}

function toggle_furcation_28_dp() {
    if (Furkation_28_dp == 0) {
        document.getElementById('furkation_1_28_dp_tab').style.display = 'block';
        document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_dp').style.display = 'block';
        document.getElementById('furkation_2_28_dp').style.display = 'none';
        document.getElementById('furkation_3_28_dp').style.display = 'none';

        Furkation_28_dp = 1;
    }
    else if (Furkation_28_dp == 1) {
        document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_dp_tab').style.display = 'block';
        document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_dp').style.display = 'none';
        document.getElementById('furkation_2_28_dp').style.display = 'block';
        document.getElementById('furkation_3_28_dp').style.display = 'none';
        
        Furkation_28_dp = 2;
    }
    else if (Furkation_28_dp == 2) {
        document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_dp_tab').style.display = 'block';
        
        document.getElementById('furkation_1_28_dp').style.display = 'none';
        document.getElementById('furkation_2_28_dp').style.display = 'none';
        document.getElementById('furkation_3_28_dp').style.display = 'block';
                    
        Furkation_28_dp = 3;
    }
    else if (Furkation_28_dp == 3) {
        document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_dp').style.display = 'none';
        document.getElementById('furkation_2_28_dp').style.display = 'none';
        document.getElementById('furkation_3_28_dp').style.display = 'none';
                    
        Furkation_28_dp = 0;
    }
}

function toggle_furcation_28_mp() {
    if (Furkation_28_mp == 0) {
        document.getElementById('furkation_1_28_mp_tab').style.display = 'block';
        document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_mp').style.display = 'block';
        document.getElementById('furkation_2_28_mp').style.display = 'none';
        document.getElementById('furkation_3_28_mp').style.display = 'none';

        Furkation_28_mp = 1;
    }
    else if (Furkation_28_mp == 1) {
        document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_mp_tab').style.display = 'block';
        document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_mp').style.display = 'none';
        document.getElementById('furkation_2_28_mp').style.display = 'block';
        document.getElementById('furkation_3_28_mp').style.display = 'none';
        
        Furkation_28_mp = 2;
    }
    else if (Furkation_28_mp == 2) {
        document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_mp_tab').style.display = 'block';
        
        document.getElementById('furkation_1_28_mp').style.display = 'none';
        document.getElementById('furkation_2_28_mp').style.display = 'none';
        document.getElementById('furkation_3_28_mp').style.display = 'block';
                    
        Furkation_28_mp = 3;
    }
    else if (Furkation_28_mp == 3) {
        document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_28_mp').style.display = 'none';
        document.getElementById('furkation_2_28_mp').style.display = 'none';
        document.getElementById('furkation_3_28_mp').style.display = 'none';
                    
        Furkation_28_mp = 0;
    }
}

function toggle_BOP_28_db() {
    if (BOP_28_db == 0) {
        BOP_28_db = 1;
        document.getElementById('BOP_28_db_rectangle').style.display = 'block';
    }
    else {
        BOP_28_db = 0;
        document.getElementById('BOP_28_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_28_b() {
    if (BOP_28_b == 0) {
        BOP_28_b = 1;
        document.getElementById('BOP_28_b_rectangle').style.display = 'block';
    }
    else {
        BOP_28_b = 0;
        document.getElementById('BOP_28_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_28_mb() {
    if (BOP_28_mb == 0) {
        BOP_28_mb = 1;
        document.getElementById('BOP_28_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_28_mb = 0;
        document.getElementById('BOP_28_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_28_db() {
    if (PI_28_db == 0) {
        PI_28_db = 1;
        document.getElementById('PI_28_db_rectangle').style.display = 'block';
    }
    else {
        PI_28_db = 0;
        document.getElementById('PI_28_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_28_b() {
    if (PI_28_b == 0) {
        PI_28_b = 1;
        document.getElementById('PI_28_b_rectangle').style.display = 'block';
    }
    else {
        PI_28_b = 0;
        document.getElementById('PI_28_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_28_mb() {
    if (PI_28_mb == 0) {
        PI_28_mb = 1;
        document.getElementById('PI_28_mb_rectangle').style.display = 'block';
    }
    else {
        PI_28_mb = 0;
        document.getElementById('PI_28_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_28_dp() {
    if (BOP_28_dp == 0) {
        BOP_28_dp = 1;
        document.getElementById('BOP_28_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_28_dp = 0;
        document.getElementById('BOP_28_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_28_p() {
    if (BOP_28_p == 0) {
        BOP_28_p = 1;
        document.getElementById('BOP_28_p_rectangle').style.display = 'block';
    }
    else {
        BOP_28_p = 0;
        document.getElementById('BOP_28_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_28_mp() {
    if (BOP_28_mp == 0) {
        BOP_28_mp = 1;
        document.getElementById('BOP_28_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_28_mp = 0;
        document.getElementById('BOP_28_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_28_dp() {
    if (PI_28_dp == 0) {
        PI_28_dp = 1;
        document.getElementById('PI_28_dp_rectangle').style.display = 'block';
    }
    else {
        PI_28_dp = 0;
        document.getElementById('PI_28_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_28_p() {
    if (PI_28_p == 0) {
        PI_28_p = 1;
        document.getElementById('PI_28_p_rectangle').style.display = 'block';
    }
    else {
        PI_28_p = 0;
        document.getElementById('PI_28_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_28_mp() {
    if (PI_28_mp == 0) {
        PI_28_mp = 1;
        document.getElementById('PI_28_mp_rectangle').style.display = 'block';
    }
    else {
        PI_28_mp = 0;
        document.getElementById('PI_28_mp_rectangle').style.display = 'none';
    }
}

function change_probing_28() {
    if (Zahn_28 == 1) {
        
    // Variablen aus dem Formular
        st_28_db = document.forms[0]["st_28_db"].value;
        st_28_b = document.forms[0]["st_28_b"].value;
        st_28_mb = document.forms[0]["st_28_mb"].value;

        if (document.forms[0]["st_28_dp"].value > 3) {document.forms[0]["st_28_dp"].style.color = 'red';} else {document.forms[0]["st_28_dp"].style.color = 'black'};
        if (document.forms[0]["st_28_p"].value > 3) {document.forms[0]["st_28_p"].style.color = 'red';} else {document.forms[0]["st_28_p"].style.color = 'black'};
        if (document.forms[0]["st_28_mp"].value > 3) {document.forms[0]["st_28_mp"].style.color = 'red';} else {document.forms[0]["st_28_mp"].style.color = 'black'};
        
        mg_28_db = document.forms[0]["mg_28_db"].value;
        mg_28_b = document.forms[0]["mg_28_b"].value;
        mg_28_mb = document.forms[0]["mg_28_mb"].value;
        
        st_28_dp = document.forms[0]["st_28_dp"].value;
        st_28_p = document.forms[0]["st_28_p"].value;
        st_28_mp = document.forms[0]["st_28_mp"].value;

        if (document.forms[0]["st_28_db"].value > 3) {document.forms[0]["st_28_db"].style.color = 'red';} else {document.forms[0]["st_28_db"].style.color = 'black'};
        if (document.forms[0]["st_28_b"].value > 3) {document.forms[0]["st_28_b"].style.color = 'red';} else {document.forms[0]["st_28_b"].style.color = 'black'};
        if (document.forms[0]["st_28_mb"].value > 3) {document.forms[0]["st_28_mb"].style.color = 'red';} else {document.forms[0]["st_28_mb"].style.color = 'black'};
        
        mg_28_dp = document.forms[0]["mg_28_dp"].value;
        mg_28_p = document.forms[0]["mg_28_p"].value;
        mg_28_mp = document.forms[0]["mg_28_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 28 (bukkal) in der Bitmap
        var x_db_28 = 1063;							// distal 28
        var x_mb_28 = 1026;							// mesial 28
        var x_b_28 = (x_db_28 + x_mb_28)/2;			// bukkal 28
        
    // Set der horizontalen Koordinaten von Zahn 28 (palatinal) in der Bitmap
        var x_dp_28 = 1067;							// distal 28
        var x_mp_28 = 1028;							// mesial 28
        var x_p_28 = (x_dp_28 + x_mp_28)/2;			// palatinal 28
        
    // Set der vertikalen Koordinaten von Zahn 28 (bukkal) aus dem Formular
        var y_mg_28_db = mg_OK_b + 6.5 * mg_28_db;	// Margo Gingivae distobukkal 28
        var y_mg_28_b = mg_OK_b + 6.5 * mg_28_b;	// Margo Gingivae bukkal 28
        var y_mg_28_mb = mg_OK_b + 6.5 * mg_28_mb;	// Margo Gingivae mesiobukkal 28
        var y_st_28_db = 6.5 * st_28_db;			// Sondierungstiefe distobukkal 28
        var y_st_28_b = 6.5 * st_28_b;				// Sondierungstiefe bukkal 28
        var y_st_28_mb = 6.5 * st_28_mb;			// Sondierungstiefe mesiobukkal 28
        
    // Set der vertikalen Koordinaten von Zahn 28 (palatinal) aus dem Formular
        var y_mg_28_dp = mg_OK_p - 6.5 * mg_28_dp;	// Margo Gingivae distopalatinal 28
        var y_mg_28_p = mg_OK_p - 6.5 * mg_28_p;	// Margo Gingivae palatinal 28
        var y_mg_28_mp = mg_OK_p - 6.5 * mg_28_mp;	// Margo Gingivae mesiopalatinal 28
        var y_st_28_dp = 6.5 * st_28_dp;			// Sondierungstiefe distopalatinal 28
        var y_st_28_p = 6.5 * st_28_p;				// Sondierungstiefe palatinal 28
        var y_st_28_mp = 6.5 * st_28_mp;			// Sondierungstiefe mesiopalatinal 28
        
    // Berechnung des Attachmentniveaus 28 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_28_db = y_mg_28_db - y_st_28_db;	// Attachmentniveau distobukkal 28
        var y_an_28_b = y_mg_28_b - y_st_28_b;		// Attachmentniveau bukkal 28
        var y_an_28_mb = y_mg_28_mb - y_st_28_mb;	// Attachmentniveau mesiobukkal 28
        
    // Berechnung des Attachmentniveaus 28 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_28_dp = y_mg_28_dp + y_st_28_dp;	// Attachmentniveau distopalatinal 28
        var y_an_28_p = y_mg_28_p + y_st_28_p;		// Attachmentniveau palatinal 28
        var y_an_28_mp = y_mg_28_mp + y_st_28_mp;	// Attachmentniveau mesiopalatinal 28
        
    // Parodontaltasche 28 bukkal zeichnen
        var string = 
            x_db_28 + ", " + y_an_28_db + "  " + 
            x_b_28 + ", " + y_an_28_b + "  " + 
            x_mb_28 + ", " + y_an_28_mb + "  " + 
            x_mb_28 + ", " + y_mg_28_mb + "  " + 
            x_b_28 + ", " + y_mg_28_b + "  " + 
            x_db_28 + ", " + y_mg_28_db;
        document.getElementById("polygon_28_b").setAttribute("points", string);
    // Attachmentniveau 28 bukkal zeichnen
        var string = 
            x_db_28 + ", " + y_an_28_db + "  " + 
            x_b_28 + ", " + y_an_28_b + "  " + 
            x_mb_28 + ", " + y_an_28_mb;
        document.getElementById("polyline_an_28_b").setAttribute("points", string);
    // Margo Gingivae 28 bukkal zeichnen
        var string =
            x_db_28 + ", " + y_mg_28_db + "  " + 
            x_b_28 + ", " + y_mg_28_b + "  " + 
            x_mb_28 + ", " + y_mg_28_mb;
        document.getElementById("polyline_mg_28_b").setAttribute("points", string);

    // Parodontaltasche 28 palatinal zeichnen
        var string = 
            x_dp_28 + ", " + y_an_28_dp + "  " + 
            x_p_28 + ", " + y_an_28_p + "  " + 
            x_mp_28 + ", " + y_an_28_mp + "  " + 
            x_mp_28 + ", " + y_mg_28_mp + "  " + 
            x_p_28 + ", " + y_mg_28_p + "  " + 
            x_dp_28 + ", " + y_mg_28_dp;
        document.getElementById("polygon_28_p").setAttribute("points", string);
    // Attachmentniveau 28 palatinal zeichnen
        var string = 
            x_dp_28 + ", " + y_an_28_dp + "  " + 
            x_p_28 + ", " + y_an_28_p + "  " + 
            x_mp_28 + ", " + y_an_28_mp;
        document.getElementById("polyline_an_28_p").setAttribute("points", string);
    // Margo Gingivae 28 palatinal zeichnen
        var string =
            x_dp_28 + ", " + y_mg_28_dp + "  " + 
            x_p_28 + ", " + y_mg_28_p + "  " + 
            x_mp_28 + ", " + y_mg_28_mp;
        document.getElementById("polyline_mg_28_p").setAttribute("points", string);
    }
    if (Zahn_28 == 1 && Zahn_27 == 1) {

        st_27_db = document.forms[0]["st_27_db"].value;
        mg_27_db = document.forms[0]["mg_27_db"].value;
        
        st_27_dp = document.forms[0]["st_27_dp"].value;
        mg_27_dp = document.forms[0]["mg_27_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
        var x_db_27 = 1011;							// distal 27
        
    // Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
        var x_dp_27 = 1015;							// distal 27
        
    // Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
        var y_mg_27_db = mg_OK_b + 6.5 * mg_27_db;	// Margo Gingivae distobukkal 27
        var y_st_27_db = 6.5 * st_27_db;			// Sondierungstiefe distobukkal 27
        
    // Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
        var y_mg_27_dp = mg_OK_p - 6.5 * mg_27_dp;	// Margo Gingivae distopalatinal 27
        var y_st_27_dp = 6.5 * st_27_dp;			// Sondierungstiefe distopalatinal 27
        
    // Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_27_db = y_mg_27_db - y_st_27_db;	// Attachmentniveau distobukkal 27
        
    // Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_27_dp = y_mg_27_dp + y_st_27_dp;	// Attachmentniveau distopalatinal 27

    // Parodontaltasche inter_28_27 bukkal zeichnen
        var string = 
            x_mb_28 + ", " + y_an_28_mb + "  " + 
            x_db_27 + ", " + y_an_27_db + "  " + 
            x_db_27 + ", " + y_mg_27_db + "  " + 
            x_mb_28 + ", " + y_mg_28_mb;
        document.getElementById("polygon_inter_28_27_b").setAttribute("points", string);
    // Attachmentniveau inter_28_27 bukkal zeichnen
        var string = 
            x_mb_28 + ", " + y_an_28_mb + "  " + 
            x_db_27 + ", " + y_an_27_db;
        document.getElementById("polyline_an_inter_28_27_b").setAttribute("points", string);
    // Margo Gingivae inter_28_27 bukkal zeichnen
        var string =
            x_mb_28 + ", " + y_mg_28_mb + "  " + 
            x_db_27 + ", " + y_mg_27_db;
        document.getElementById("polyline_mg_inter_28_27_b").setAttribute("points", string);

    // Parodontaltasche inter_28_27 palatinal zeichnen
        var string = 
            x_mp_28 + ", " + y_an_28_mp + "  " + 
            x_dp_27 + ", " + y_an_27_dp + "  " + 
            x_dp_27 + ", " + y_mg_27_dp + "  " + 
            x_mp_28 + ", " + y_mg_28_mp;
        document.getElementById("polygon_inter_28_27_p").setAttribute("points", string);
    // Attachmentniveau inter_28_27 palatinal zeichnen
        var string = 
            x_mp_28 + ", " + y_an_28_mp + "  " + 
            x_dp_27 + ", " + y_an_27_dp;
        document.getElementById("polyline_an_inter_28_27_p").setAttribute("points", string);
    // Margo Gingivae inter_28_27 palatinal zeichnen
        var string =
            x_mp_28 + ", " + y_mg_28_mp + "  " + 
            x_dp_27 + ", " + y_mg_27_dp;
        document.getElementById("polyline_mg_inter_28_27_p").setAttribute("points", string);
    }
}