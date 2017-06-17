//Script for tooltip
dw_Tooltip.defaultProps = {
    supportTouch: true, // set false by default
    sticky: true,
    showCloseBox: true,
    //positionFn: posCenterAboveTgt,
    wrapFn: dw_Tooltip.wrapToWidth
}

// Problems, errors? See http://www.dyn-web.com/tutorials/obj_lit.php#syntax

dw_Tooltip.content_vars = {
    L1: {
        str: '<p>This is the Museum of Anthropology (MOA)</p><p>Do you want directions from here to:<ul><li>Beatty Biodiversity Museum</li><li>Bus Loop</li><li>The Nest</li><li>Nitobe Memorial Garden</li><li>Pacific Museum of the Earth</li></ul></p>',
        w: 280
    }, 
    L2:  {
        str:'<p>This is Nitobe Memorial Garden.</p><p>Do you want directions from here to:<ul><li>Beatty Biodiversity Museum</li><li>Bus Loop</li><li>Museum of Anthropology (MOA)</li><li>The Nest</li><li>Pacific Museum of the Earth</li></ul></p>',
        w: 280
    },
    L3: {
        str: '<p>This is the Beatty Biodiversity Museum.</p><p>Do you want directions from here to:<ul><li>Bus Loop</li><li>Museum of Anthropology (MOA)</li><li>The Nest</li><li>Nitobe Memorial Garden</li><li>Pacific Museum of the Earth</li></ul></p>',
        w: 280
    },
    L4: {
    	str: '<p>This is the Nest.</p><p>Do you want directions from here to:<ul><li>Beatty Biodiversity Museum</li><li>Bus Loop</li><li>Museum of Anthropology (MOA)</li><li>Nitobe Memorial Garden</li><li>Pacific Museum of the Earth</li></ul></p>',
    	w: 280
    },
    L5: {
    	str: '<p>This is the Pacific Museum of the Earth.</p><p>Do you want directions from here to:<ul><li>Beatty Biodiversity Museum</li><li>Bus Loop</li><li>Museum of Anthropology (MOA)</li><li>The Nest</li><li>Nitobe Memorial Garden</li></ul></p>',
    	w: 280
    },
    L6: {
    	str: '<p>This is the UBC Bus Loop.</p><p>Do you want directions from here to:<ul><li>Beatty Biodiversity Museum</li><li>Museum of Anthropology (MOA)</li><li>The Nest</li><li>Nitobe Memorial Garden</li><li>Pacific Museum of the Earth</li></ul></p>',
    	w: 280
    }
}