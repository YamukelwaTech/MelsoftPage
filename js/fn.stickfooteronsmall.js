SEMICOLON.Core.getVars.fn.stickfooteronsmall=e=>{const t=SEMICOLON.Core;if((e=t.getSelector(e,!1)).length<1)return!0;t.getVars.elFooter.style.marginTop="";var r=t.viewport().height,e=t.getVars.elWrapper.offsetHeight;!t.getVars.elBody.classList.contains("sticky-footer")&&"undefined"!==t.getVars.elFooter&&t.getVars.elWrapper.contains(t.getVars.elFooter)&&e<r&&(t.getVars.elFooter.style.marginTop=r-e+"px"),t.getVars.resizers.stickfooter=()=>SEMICOLON.Base.stickFooterOnSmall()};