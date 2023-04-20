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
