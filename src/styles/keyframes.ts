import { keyframes } from "@emotion/react";

export const textUnderline = keyframes`
from {border-bottom: none;}
to {border-bottom: 1px solid black;}
`;

export const menuVisibility = keyframes`
from {
    visibility: hidden;
    pointer-events: none;
    background-color: white;    
    opacity: 0;
}
to { transition: opacity .2s cubic-bezier(.215,.61,.355,1),visibility 0s .2s,background-color .2s cubic-bezier(.215,.61,.355,1),border .2s cubic-bezier(.215,.61,.355,1);}
`;

export const bounce = keyframes`
    0%,100%,20%,50%,80% {
        -webkit-transform: translateY(0) rotate(135deg);
        transform: translateY(0) rotate(135deg)
    }

    40% {
        -webkit-transform: translateY(-20px) rotate(135deg);
        transform: translateY(-20px) rotate(135deg)
    }

    60% {
        -webkit-transform: translateY(-15px) rotate(135deg);
        transform: translateY(-15px) rotate(135deg)
    }
`;

export const listOpening = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

// export const flash = keyframes`
//     0% {
//         color: white;
//     }

//     50% {
//         color: ${defaultTheme.colors.hoverColor};
//     }

//     100% {
//         color: white;
//     }
// `;

export const shine = keyframes`
    100% {
        left: 125%;
    }
`;

export const progress = (value: any) => keyframes`
    0% { 
        --percentage: 0;
     }
    100% {
         --percentage: ${value};
         }
`;
