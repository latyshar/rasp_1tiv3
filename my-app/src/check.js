import React, { useEffect, useState } from 'react'; 

const defaultValues = {};
function Check (values = defaultValues) {
    useEffect(()=> { 
        var year = new Date().getFullYear(); 
        var month1 = new Date().getMonth(); 
        var today = new Date(year, month1, 0).getTime(); 
        var now = new Date().getTime(); 
        var week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7)); 
        if (week % 2) { 
        alert("Текущая неделя - нечётная"); 
        } else { 
        alert("Текущая неделя - чётная"); 
        } 
        },
        [values] 
    )
}

export default Check;