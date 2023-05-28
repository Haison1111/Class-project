let bigEdataBtn = [
    { 
        id : "1",
        HtmlCode : `<div class="uiverse-tooltip">
        <span class="tooltip-button">uiverse.io</span>
        <span> Tooltip </span>
      </div>`,
        CssCode : 
        `.uiverse-tooltip {
            position: relative;
            background: #ffffff;
            color: #000;
            padding: 15px;
            margin: 10px;
            border-radius: 10px;
            width: 150px;
            height: 50px;
            font-size: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .tooltip-button {
            position: absolute;
            top: 0;
            font-size: 14px;
            background: #ffffff;
            color: #ffffff;
            padding: 5px 8px;
            border-radius: 5px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .tooltip-button::before {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            background: #ffffff;
            bottom: -3px;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .uiverse-tooltip:hover .tooltip-button {
            top: -45px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }
          
          svg:hover span,
          svg:hover .tooltip-button {
            text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
          }
          
          .uiverse-tooltip:hover,
          .uiverse-tooltip:hover .tooltip-button,
          .uiverse-tooltip:hover .tooltip-button::before {
            background: linear-gradient(320deg, rgb(3, 77, 146), rgb(0, 60, 255));
            color: #ffffff;
          }
        
          .cta {
            border: none;
            background: none;
          }
          
          .cta span {
            padding-bottom: 7px;
            letter-spacing: 4px;
            font-size: 14px;
            padding-right: 15px;
            text-transform: uppercase;
          }
          
          .cta svg {
            transform: translateX(-8px);
            transition: all 0.3s ease;
          }
          
          .cta:hover svg {
            transform: translateX(0);
          }
          
          .cta:active svg {
            transform: scale(0.9);
          }
          
          .hover-underline-animation {
            position: relative;
            color: black;
            padding-bottom: 20px;
          }
          
          .hover-underline-animation:after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #000000;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }
          
          .cta:hover .hover-underline-animation:after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }`,

    },
    {
      id: "2",
      HtmlCode: `
      <button class="cta">
      <span class="hover-underline-animation"> Shop now </span>
      <svg
        viewBox="0 0 46 16"
        height="10"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-horizontal"
      >
        <path
          transform="translate(30)"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          data-name="Path 10"
          id="Path_10"
        ></path>
      </svg>
      </button>`,
       CssCode: `
       button.stack-btn {
        transition: all 0.5s;
        font-size: 17px;
        padding: 1ch 2ch;
        background-color: rgb(233, 220, 220);
        color: #000;
        font-family: Roboto, sans-serif;
        border: none;
        border-radius: 2px;
        box-shadow: 2px 2px 0px hsl(0, 0%, 90%),
          4px 4px 0px hsl(0, 0%, 80%),
          6px 6px 0px hsl(0, 0%, 70%),
          8px 8px 0px hsl(0, 0%, 60%),
          10px 10px 0px hsl(0, 0%, 50%),
          12px 12px 0px hsl(0, 0%, 40%),
          14px 14px 0px hsl(0, 0%, 30%),
          16px 16px 0px hsl(0, 0%, 20%),
          18px 18px 0px hsl(0, 0%, 10%);
      }
      
      button.stack-btn:hover {
        background-color: hsl(0, 0%, 50%);
        color: #fff;
        box-shadow: none;
      }`,
    },
    {
      id: "3",
      HtmlCode:`
      <button class="stack-btn">Button</button>`,
      CssCode:`
      button.stack-btn {
        transition: all 0.5s;
        font-size: 17px;
        padding: 1ch 2ch;
        background-color: rgb(233, 220, 220);
        color: #000;
        font-family: Roboto, sans-serif;
        border: none;
        border-radius: 2px;
        box-shadow: 2px 2px 0px hsl(0, 0%, 90%),
          4px 4px 0px hsl(0, 0%, 80%),
          6px 6px 0px hsl(0, 0%, 70%),
          8px 8px 0px hsl(0, 0%, 60%),
          10px 10px 0px hsl(0, 0%, 50%),
          12px 12px 0px hsl(0, 0%, 40%),
          14px 14px 0px hsl(0, 0%, 30%),
          16px 16px 0px hsl(0, 0%, 20%),
          18px 18px 0px hsl(0, 0%, 10%);
      }
      
      button.stack-btn:hover {
        background-color: hsl(0, 0%, 50%);
        color: #fff;
        box-shadow: none;
      }`,
    },
    {
      id: "4",
      HtmlCode:`
      <button class="drop-btn" alt="tony stark">
              <i>t</i>
              <i>o</i>
              <i>n</i>
              <i>y</i>
              <i>&nbsp;</i>
              <i>s</i>
              <i>t</i>
              <i>a</i>
              <i>r</i>
              <i>k</i>
            </button>`,
      CssCode:`
      button.drop-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        position: relative;
        padding: 0 20px;
        font-size: 18px;
        text-transform: uppercase;
        border: 0;
        box-shadow: hsl(210deg 87% 36%) 0px 7px 0px 0px;
        background-color: hsl(210deg 100% 44%);
        border-radius: 12px;
        overflow: hidden;
        transition: 31ms cubic-bezier(.5, .7, .4, 1);
       }
       
       button.drop-btn:before {
        content: attr(alt);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        inset: 0;
        font-size: 15px;
        font-weight: bold;
        color: white;
        letter-spacing: 4px;
        opacity: 1;
       }
       
       button.drop-btn:active {
        box-shadow: none;
        transform: translateY(7px);
        transition: 35ms cubic-bezier(.5, .7, .4, 1);
       }
       
       button.drop-btn:hover:before {
        transition: all .0s;
        transform: translateY(100%);
        opacity: 0;
       }
       
       button.drop-btn i {
        color: white;
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 4px;
        font-style: normal;
        transition: all 2s ease;
        transform: translateY(-20px);
        opacity: 0;
       }
       
       button.drop-btn:hover i {
        transition: all .2s ease;
        transform: translateY(0px);
        opacity: 1;
       }
       
       button.drop-btn:hover i:nth-child(1) {
        transition-delay: 0.045s;
       }
       
       button.drop-btn:hover i:nth-child(2) {
        transition-delay: calc(0.045s * 3);
       }
       
       button.drop-btn:hover i:nth-child(3) {
        transition-delay: calc(0.045s * 4);
       }
       
       button.drop-btn:hover i:nth-child(4) {
        transition-delay: calc(0.045s * 5);
       }
       
       button.drop-btn:hover i:nth-child(6) {
        transition-delay: calc(0.045s * 6);
       }
       
       button.drop-btn:hover i:nth-child(7) {
        transition-delay: calc(0.045s * 7);
       }
       
       button.drop-btn:hover i:nth-child(8) {
        transition-delay: calc(0.045s * 8);
       }
       
       button.drop-btn:hover i:nth-child(9) {
        transition-delay: calc(0.045s * 9);
       }
       
       button.drop-btn:hover i:nth-child(10) {
        transition-delay: calc(0.045s * 10);
       }`,
    }
];

let bigEdataLd =[
  {
    id: "1",
    HtmlCode:`
    <svg
              class="pl"
              viewBox="0 0 160 160"
              width="160px"
              height="160px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#000"></stop>
                  <stop offset="100%" stop-color="#fff"></stop>
                </linearGradient>
                <mask id="mask1">
                  <rect
                    x="0"
                    y="0"
                    width="160"
                    height="160"
                    fill="url(#grad)"
                  ></rect>
                </mask>
                <mask id="mask2">
                  <rect
                    x="28"
                    y="28"
                    width="104"
                    height="104"
                    fill="url(#grad)"
                  ></rect>
                </mask>
              </defs>

              <g>
                <g class="pl__ring-rotate">
                  <circle
                    class="pl__ring-stroke"
                    cx="80"
                    cy="80"
                    r="72"
                    fill="none"
                    stroke="hsl(223,90%,55%)"
                    stroke-width="16"
                    stroke-dasharray="452.39 452.39"
                    stroke-dashoffset="452"
                    stroke-linecap="round"
                    transform="rotate(-45,80,80)"
                  ></circle>
                </g>
              </g>
              <g mask="url(#mask1)">
                <g class="pl__ring-rotate">
                  <circle
                    class="pl__ring-stroke"
                    cx="80"
                    cy="80"
                    r="72"
                    fill="none"
                    stroke="hsl(193,90%,55%)"
                    stroke-width="16"
                    stroke-dasharray="452.39 452.39"
                    stroke-dashoffset="452"
                    stroke-linecap="round"
                    transform="rotate(-45,80,80)"
                  ></circle>
                </g>
              </g>

              <g>
                <g
                  stroke-width="4"
                  stroke-dasharray="12 12"
                  stroke-dashoffset="12"
                  stroke-linecap="round"
                  transform="translate(80,80)"
                >
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(-135,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(-90,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(-45,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(0,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(45,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(90,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(135,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,10%,90%)"
                    points="0,2 0,14"
                    transform="rotate(180,0,0) translate(0,40)"
                  ></polyline>
                </g>
              </g>
              <g mask="url(#mask1)">
                <g
                  stroke-width="4"
                  stroke-dasharray="12 12"
                  stroke-dashoffset="12"
                  stroke-linecap="round"
                  transform="translate(80,80)"
                >
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(-135,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(-90,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(-45,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(0,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(45,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(90,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(135,0,0) translate(0,40)"
                  ></polyline>
                  <polyline
                    class="pl__tick"
                    stroke="hsl(223,90%,80%)"
                    points="0,2 0,14"
                    transform="rotate(180,0,0) translate(0,40)"
                  ></polyline>
                </g>
              </g>

              <g>
                <g transform="translate(64,28)">
                  <g class="pl__arrows" transform="rotate(45,16,52)">
                    <path
                      fill="hsl(3,90%,55%)"
                      d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                    ></path>
                    <path
                      fill="hsl(223,10%,90%)"
                      d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                    ></path>
                  </g>
                </g>
              </g>
              <g mask="url(#mask2)">
                <g transform="translate(64,28)">
                  <g class="pl__arrows" transform="rotate(45,16,52)">
                    <path
                      fill="hsl(333,90%,55%)"
                      d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                    ></path>
                    <path
                      fill="hsl(223,90%,80%)"
                      d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>`,
    CssCode:`
    .pl {
      display: block;
      width: 9.375em;
      height: 9.375em;
    }
    
    .pl__arrows,
    .pl__ring-rotate,
    .pl__ring-stroke,
    .pl__tick {
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    
    .pl__arrows {
      animation-name: arrows42;
      transform: rotate(45deg);
      transform-origin: 16px 52px;
    }
    
    .pl__ring-rotate,
    .pl__ring-stroke {
      transform-origin: 80px 80px;
    }
    
    .pl__ring-rotate {
      animation-name: ringRotate42;
    }
    
    .pl__ring-stroke {
      animation-name: ringStroke42;
      transform: rotate(-45deg);
    }
    
    .pl__tick {
      animation-name: tick42;
    }
    
    .pl__tick:nth-child(2) {
      animation-delay: -1.75s;
    }
    
    .pl__tick:nth-child(3) {
      animation-delay: -1.5s;
    }
    
    .pl__tick:nth-child(4) {
      animation-delay: -1.25s;
    }
    
    .pl__tick:nth-child(5) {
      animation-delay: -1s;
    }
    
    .pl__tick:nth-child(6) {
      animation-delay: -0.75s;
    }
    
    .pl__tick:nth-child(7) {
      animation-delay: -0.5s;
    }
    
    .pl__tick:nth-child(8) {
      animation-delay: -0.25s;
    }
    @keyframes arrows42 {
      from {
        transform: rotate(45deg);
      }
    
      to {
        transform: rotate(405deg);
      }
    }
    
    @keyframes ringRotate42 {
      from {
        transform: rotate(0);
      }
    
      to {
        transform: rotate(720deg);
      }
    }
    
    @keyframes ringStroke42 {
      from,
        to {
        stroke-dashoffset: 452;
        transform: rotate(-45deg);
      }
    
      50% {
        stroke-dashoffset: 169.5;
        transform: rotate(-180deg);
      }
    }
    
    @keyframes tick42 {
      from,
        3%,
        47%,
        to {
        stroke-dashoffset: -12;
      }
    
      14%,
        36% {
        stroke-dashoffset: 0;
      }
    }`,
  },
  {
    id:"2",
    HtmlCode:`
    <div class="loader-ninesquare">
                <div class="cell d-0"></div>
                <div class="cell d-1"></div>
                <div class="cell d-2"></div>
              
                <div class="cell d-1"></div>
                <div class="cell d-2"></div>
                
                
                <div class="cell d-2"></div>
                <div class="cell d-3"></div>
                
                
                <div class="cell d-3"></div>
                <div class="cell d-4"></div>
                
                
              </div>`,
    CssCode:`
    .loader-ninesquare {
      --cell-size: 52px;
      --cell-spacing: 1px;
      --cells: 3;
      --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
      display: flex;
      flex-wrap: wrap;
      width: var(--total-size);
      height: var(--total-size);
    }
    
    .cell {
      flex: 0 0 var(--cell-size);
      margin: var(--cell-spacing);
      background-color: transparent;
      box-sizing: border-box;
      border-radius: 4px;
      animation: 1.5s ripple ease infinite;
    }
    
    .cell.d-1 {
      animation-delay: 100ms;
    }
    
    .cell.d-2 {
      animation-delay: 200ms;
    }
    
    .cell.d-3 {
      animation-delay: 300ms;
    }
    
    .cell.d-4 {
      animation-delay: 400ms;
    }
    
    .cell:nth-child(1) {
      --cell-color: #00FF87;
    }
    
    .cell:nth-child(2) {
      --cell-color: #0CFD95;
    }
    
    .cell:nth-child(3) {
      --cell-color: #17FBA2;
    }
    
    .cell:nth-child(4) {
      --cell-color: #23F9B2;
    }
    
    .cell:nth-child(5) {
      --cell-color: #30F7C3;
    }
    
    .cell:nth-child(6) {
      --cell-color: #3DF5D4;
    }
    
    .cell:nth-child(7) {
      --cell-color: #45F4DE;
    }
    
    .cell:nth-child(8) {
      --cell-color: #53F1F0;
    }
    
    .cell:nth-child(9) {
      --cell-color: #60EFFF;
    }
    
    @keyframes ripple {
      0% {
        background-color: transparent;
      }
    
      30% {
        background-color: var(--cell-color);
      }
    
      60% {
        background-color: transparent;
      }
    
      100% {
        background-color: transparent;
      }
    }`,
  },
  {
    id: "3",
    HtmlCode:`
    <div class="cube-loader">
                <div class="cube-top"></div>
                <div class="cube-wrapper">
                  <span style="--i:0" class="cube-span"></span>
                  <span style="--i:1" class="cube-span"></span>
                  <span style="--i:2" class="cube-span"></span>
                  <span style="--i:3" class="cube-span"></span>
                </div>
              </div>`,
    CssCode:`
    .cube-loader {
      position: relative;
    /* u can choose any size */
      width: 75px;
      height: 75px;
      transform-style: preserve-3d;
      transform: rotateX(-30deg);
      animation: animate 4s linear infinite;
    }
    
    @keyframes animate {
      0% {
        transform: rotateX(-30deg) rotateY(0);
      }
    
      100% {
        transform: rotateX(-30deg) rotateY(360deg);
      }
    }
    
    .cube-loader .cube-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      /* top: 0;
      left: 0; */
      transform-style: preserve-3d;
    }
    
    .cube-loader .cube-wrapper .cube-span {
      position: absolute;
      width: 100%;
      height: 100%;
      /* top: 0;
      left: 0; */
                                         /* width 75px / 2 = 37.5px */
      transform: rotateY(calc(90deg * var(--i))) translateZ(37.5px);
      background: linear-gradient(
        to bottom,
        hsl(330, 3.13%, 25.1%) 0%,
        hsl(177.27, 21.71%, 32.06%) 5.5%,
        hsl(176.67, 34.1%, 36.88%) 12.1%,
        hsl(176.61, 42.28%, 40.7%) 19.6%,
        hsl(176.63, 48.32%, 43.88%) 27.9%,
        hsl(176.66, 53.07%, 46.58%) 36.6%,
        hsl(176.7, 56.94%, 48.91%) 45.6%,
        hsl(176.74, 62.39%, 50.91%) 54.6%,
        hsl(176.77, 69.86%, 52.62%) 63.4%,
        hsl(176.8, 76.78%, 54.08%) 71.7%,
        hsl(176.83, 83.02%, 55.29%) 79.4%,
        hsl(176.85, 88.44%, 56.28%) 86.2%,
        hsl(176.86, 92.9%, 57.04%) 91.9%,
        hsl(176.88, 96.24%, 57.59%) 96.3%,
        hsl(176.88, 98.34%, 57.93%) 99%,
        hsl(176.89, 99.07%, 58.04%) 100%
      );
    }
    
    .cube-top {
      position: absolute;
      width: 75px;
      height: 75px;
      background: hsl(330, 3.13%, 25.1%) 0%;
                          /* width 75px / 2 = 37.5px */
      transform: rotateX(90deg) translateZ(37.5px);
      transform-style: preserve-3d;
    }
    
    .cube-top::before {
      content: '';
      position: absolute;
    /* u can choose any size */
      width: 75px;
      height: 75px;
      background: hsl(176.61, 42.28%, 40.7%) 19.6%;
      transform: translateZ(-90px);
      filter: blur(10px);
      box-shadow: 0 0 10px #323232,
                  0 0 20px hsl(176.61, 42.28%, 40.7%) 19.6%,
                  0 0 30px #323232,
                  0 0 40px hsl(176.61, 42.28%, 40.7%) 19.6%;
    }
  
    
    /* loader 3 body */
  
    .three-body {
      --uib-size: 35px;
      --uib-speed: 0.8s;
      --uib-color: #5D3FD3;
      position: relative;
      display: inline-block;
      height: var(--uib-size);
      width: var(--uib-size);
      animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
     }
     
     .three-body__dot {
      position: absolute;
      height: 100%;
      width: 30%;
     }
     
     .three-body__dot:after {
      content: '';
      position: absolute;
      height: 0%;
      width: 100%;
      padding-bottom: 100%;
      background-color: var(--uib-color);
      border-radius: 50%;
     }
     
     .three-body__dot:nth-child(1) {
      bottom: 5%;
      left: 0;
      transform: rotate(60deg);
      transform-origin: 50% 85%;
     }
     
     .three-body__dot:nth-child(1)::after {
      bottom: 0;
      left: 0;
      animation: wobble1 var(--uib-speed) infinite ease-in-out;
      animation-delay: calc(var(--uib-speed) * -0.3);
     }
     
     .three-body__dot:nth-child(2) {
      bottom: 5%;
      right: 0;
      transform: rotate(-60deg);
      transform-origin: 50% 85%;
     }
     
     .three-body__dot:nth-child(2)::after {
      bottom: 0;
      left: 0;
      animation: wobble1 var(--uib-speed) infinite
         calc(var(--uib-speed) * -0.15) ease-in-out;
     }
     
     .three-body__dot:nth-child(3) {
      bottom: -5%;
      left: 0;
      transform: translateX(116.666%);
     }
     
     .three-body__dot:nth-child(3)::after {
      top: 0;
      left: 0;
      animation: wobble2 var(--uib-speed) infinite ease-in-out;
     }
     
     @keyframes spin78236 {
      0% {
       transform: rotate(0deg);
      }
     
      100% {
       transform: rotate(360deg);
      }
     }
     
     @keyframes wobble1 {
      0%,
       100% {
       transform: translateY(0%) scale(1);
       opacity: 1;
      }
     
      50% {
       transform: translateY(-66%) scale(0.65);
       opacity: 0.8;
      }
     }
     
     @keyframes wobble2 {
      0%,
       100% {
       transform: translateY(0%) scale(1);
       opacity: 1;
      }
     
      50% {
       transform: translateY(66%) scale(0.65);
       opacity: 0.8;
      }
     }`,
     
  },
  {
    id: "4",
    HtmlCode:`
    <div class="three-body">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                </div>`,
    CssCode:`
    .three-body {
      --uib-size: 35px;
      --uib-speed: 0.8s;
      --uib-color: #5D3FD3;
      position: relative;
      display: inline-block;
      height: var(--uib-size);
      width: var(--uib-size);
      animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
     }
     
     .three-body__dot {
      position: absolute;
      height: 100%;
      width: 30%;
     }
     
     .three-body__dot:after {
      content: '';
      position: absolute;
      height: 0%;
      width: 100%;
      padding-bottom: 100%;
      background-color: var(--uib-color);
      border-radius: 50%;
     }
     
     .three-body__dot:nth-child(1) {
      bottom: 5%;
      left: 0;
      transform: rotate(60deg);
      transform-origin: 50% 85%;
     }
     
     .three-body__dot:nth-child(1)::after {
      bottom: 0;
      left: 0;
      animation: wobble1 var(--uib-speed) infinite ease-in-out;
      animation-delay: calc(var(--uib-speed) * -0.3);
     }
     
     .three-body__dot:nth-child(2) {
      bottom: 5%;
      right: 0;
      transform: rotate(-60deg);
      transform-origin: 50% 85%;
     }
     
     .three-body__dot:nth-child(2)::after {
      bottom: 0;
      left: 0;
      animation: wobble1 var(--uib-speed) infinite
         calc(var(--uib-speed) * -0.15) ease-in-out;
     }
     
     .three-body__dot:nth-child(3) {
      bottom: -5%;
      left: 0;
      transform: translateX(116.666%);
     }
     
     .three-body__dot:nth-child(3)::after {
      top: 0;
      left: 0;
      animation: wobble2 var(--uib-speed) infinite ease-in-out;
     }
     
     @keyframes spin78236 {
      0% {
       transform: rotate(0deg);
      }
     
      100% {
       transform: rotate(360deg);
      }
     }
     
     @keyframes wobble1 {
      0%,
       100% {
       transform: translateY(0%) scale(1);
       opacity: 1;
      }
     
      50% {
       transform: translateY(-66%) scale(0.65);
       opacity: 0.8;
      }
     }
     
     @keyframes wobble2 {
      0%,
       100% {
       transform: translateY(0%) scale(1);
       opacity: 1;
      }
     
      50% {
       transform: translateY(66%) scale(0.65);
       opacity: 0.8;
      }
     }`,
  },
];

let bigEdataCk=[
  {
    id: "1",
    HtmlCode:`
    <div class="checkbox-apple">
            <input class="yep" id="check-apple" type="checkbox">
            <label for="check-apple">
            </label>
          </div>`,
    CssCode:`
    .checkbox-apple {
      position: relative;
      width: 50px;
      height: 25px;
      margin: 20px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .checkbox-apple label {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 25px;
      border-radius: 50px;
      background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .checkbox-apple label:after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    .checkbox-apple input[type="checkbox"]:checked+label {
      background: linear-gradient(to bottom, #4cd964, #5de24e);
    }

    .checkbox-apple input[type="checkbox"]:checked+label:after {
      transform: translateX(25px);
    }

    .checkbox-apple label:hover {
      background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
    }

    .checkbox-apple label:hover:after {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .yep {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 25px;
    }`,
  },
  {
    id:"2",
    HtmlCode:`
    <label class="container_2">
            <input checked="checked" type="checkbox">
            <div class="checkmark_2"></div>
          </label>`,
    CssCode:`
    .container_2 input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .container_2 {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 25px;
      user-select: none;
    }

    /* Create a custom checkbox */
    .checkmark_2 {
      position: relative;
      top: 0;
      left: 0;
      height: 1.3em;
      width: 1.3em;
      background: black;
      border-radius: 50px;
      transition: all 0.7s;
      --spread: 20px;
    }

    /* When the checkbox is checked, add a blue background */
    .container_2 input:checked~.checkmark_2 {
      background: black;
      box-shadow: -10px -10px var(--spread) 0px #5B51D8, 0 -10px var(--spread) 0px #833AB4, 10px -10px var(--spread) 0px #E1306C, 10px 0 var(--spread) 0px #FD1D1D, 10px 10px var(--spread) 0px #F77737, 0 10px var(--spread) 0px #FCAF45, -10px 10px var(--spread) 0px #FFDC80;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark_2:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .container_2 input:checked~.checkmark_2:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .container_2 .checkmark_2:after {
      left: 0.45em;
      top: 0.25em;
      width: 0.25em;
      height: 0.5em;
      border: solid #f0f0f0;
      border-width: 0 0.15em 0.15em 0;
      transform: rotate(45deg);
    }`,
  },
  {
    id: "3",
    HtmlCode:`
    <label class="container_3">
            <input checked="checked" type="checkbox">
            <div class="checkmark_3"></div>
          </label>`,
    CssCode:`
    /* Hide the default checkbox */
            .container_3 input {
              display: none;
            }

            .container_3 {
              display: block;
              position: relative;
              cursor: pointer;
              font-size: 20px;
              user-select: none;
              -webkit-tap-highlight-color: transparent;
            }

            /* Create a custom checkbox */
            .checkmark_3 {
              position: relative;
              top: 0;
              left: 0;
              height: 1.3em;
              width: 1.3em;
              background-color: #2196F300;
              border-radius: 0.25em;
              transition: all 0.25s;
            }

            /* When the checkbox is checked, add a blue background */
            .container_3 input:checked~.checkmark_3 {
              background-color: #2196F3;
            }

            /* Create the checkmark/indicator (hidden when not checked) */
            .checkmark_3:after {
              content: "";
              position: absolute;
              transform: rotate(0deg);
              border: 0.1em solid black;
              left: 0;
              top: 0;
              width: 1.05em;
              height: 1.05em;
              border-radius: 0.25em;
              transition: all 0.25s, border-width 0.1s;
            }

            /* Show the checkmark when checked */
            .container_3 input:checked~.checkmark_3:after {
              left: 0.45em;
              top: 0.25em;
              width: 0.25em;
              height: 0.5em;
              border-color: #fff0 white white #fff0;
              border-width: 0 0.15em 0.15em 0;
              border-radius: 0em;
              transform: rotate(45deg);
            }`,
  },
  {
    id:`4`,
    HtmlCode:`
    <label class="burger_4" for="burger_4">
            <input type="checkbox" id="burger_4">
            <span></span>
            <span></span>
            <span></span>
          </label>`,
    CssCode:`
    .burger_4 {
      position: relative;
      width: 40px;
      height: 30px;
      background: transparent;
      cursor: pointer;
      display: block;
    }

    .burger_4 input {
      display: none;
    }

    .burger_4 span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: black;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
    }

    .burger_4 span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }

    .burger_4 span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }

    .burger_4 span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }

    .burger_4 input:checked~span:nth-of-type(1) {
      transform: rotate(45deg);
      top: 0px;
      left: 5px;
    }

    .burger_4 input:checked~span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }

    .burger_4 input:checked~span:nth-of-type(3) {
      transform: rotate(-45deg);
      top: 28px;
      left: 5px;
    }`,
  }
];

let bigEdataSw = [
  {
    id:"1",
    HtmlCode:`
    <label class="switch_1">
            <input type="checkbox">
            <div class="slider_1"></div>
            <div class="slider-card_1">
              <div class="slider-card-face_1 slider-card-front_1"></div>
              <div class="slider-card-face_1 slider-card-back_1"></div>
            </div>
          </label>`,
    CssCode:`
    .switch_1 {
      --circle-dim: 1.4em;
      font-size: 17px;
      position: relative;
      display: inline-block;
      width: 3.5em;
      height: 2em;
    }

    /* Hide default HTML checkbox */
    .switch_1 input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider_1 {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f5aeae;
      transition: .4s;
      border-radius: 30px;
    }

    .slider-card_1 {
      position: absolute;
      content: "";
      height: var(--circle-dim);
      width: var(--circle-dim);
      border-radius: 20px;
      left: 0.3em;
      bottom: 0.3em;
      transition: .4s;
      pointer-events: none;
    }

    .slider-card-face_1 {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      perspective: 1000px;
      border-radius: 50%;
      transition: .4s transform;
    }

    .slider-card-front_1 {
      background-color: #DC3535;
    }

    .slider-card-back_1 {
      background-color: #379237;
      transform: rotateY(180deg);
    }

    input:checked~.slider-card_1 .slider-card-back_1 {
      transform: rotateY(0);
    }

    input:checked~.slider-card_1 .slider-card-front_1 {
      transform: rotateY(-180deg);
    }

    input:checked~.slider-card_1 {
      transform: translateX(1.5em);
    }

    input:checked~.slider_1 {
      background-color: #9ed99c;
    }`,
  },
  {
    id:"2",
    HtmlCode:`
    <label class="switch_2">
            <input type="checkbox">
            <span class="slider_2"></span>
          </label>`,
    CssCode:`
    .switch_2 {
      font-size: 17px;
      position: relative;
      display: inline-block;
      width: 3.5em;
      height: 2em;
    }

    /* Hide default HTML checkbox */
    .switch_2 input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider_2 {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      border: 1px solid #adb5bd;
      transition: .4s;
      border-radius: 30px;
    }

    .slider_2:before {
      position: absolute;
      content: "";
      height: 1.4em;
      width: 1.4em;
      border-radius: 20px;
      left: 0.27em;
      bottom: 0.25em;
      background-color: #adb5bd;
      transition: .4s;
    }

    input:checked+.slider_2 {
      background-color: #007bff;
      border: 1px solid #007bff;
    }

    input:focus+.slider_2 {
      box-shadow: 0 0 1px #007bff;
    }

    input:checked+.slider_2:before {
      transform: translateX(1.4em);
      background-color: #fff;
    }`,
  },
  {
    id:"3",
    HtmlCode:`
    <label>
            <input class="toggle-checkbox_3" type="checkbox">
            <div class="toggle-slot_3">
              <div class="sun-icon-wrapper_3">
                <div class="iconify_3 sun-icon_3" data-icon="feather-sun" data-inline="false"></div>
              </div>
              <div class="toggle-button_3"></div>
              <div class="moon-icon-wrapper_3">
                <div class="iconify_3 moon-icon_3" data-icon="feather-moon" data-inline="false"></div>
              </div>
            </div>
          </label>`,
    CssCode:`
    .toggle-checkbox_3 {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .toggle-slot_3 {
      font-size: 10px;
      position: relative;
      height: 3.5em;
      width: 7em;
      border: 0px solid transparent;
      border-radius: 10em;
      background-color: white;
      transition: background-color 250ms;
    }

    .toggle-checkbox_3:checked~.toggle-slot_3 {
      background-color: #374151;
    }

    .toggle-button_3 {
      transform: translate(0.3em, 0.25em);
      position: absolute;
      height: 3em;
      width: 3em;
      border-radius: 50%;
      background-color: #ffeccf;
      box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
      transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26, 2, .46, .71);
    }

    .toggle-checkbox_3:checked~.toggle-slot_3 .toggle-button_3 {
      background-color: #485367;
      box-shadow: inset 0px 0px 0px 0.75em white;
      transform: translate(3.65em, 0.25em);
    }

    .sun-icon_3 {
      position: absolute;
      height: 6em;
      width: 6em;
      color: #ffbb52;
    }

    .sun-icon-wrapper_3 {
      position: absolute;
      height: 6em;
      width: 6em;
      opacity: 1;
      transform: translate(2em, 2em) rotate(15deg);
      transform-origin: 50% 50%;
      transition: opacity 150ms, transform 500ms cubic-bezier(.26, 2, .46, .71);
    }

    .toggle-checkbox_3:checked~.toggle-slot_3 .sun-icon-wrapper_3 {
      opacity: 0;
      transform: translate(3em, 2em) rotate(0deg);
    }

    .moon-icon_3 {
      position: absolute;
      height: 6em;
      width: 6em;
      color: white;
    }

    .moon-icon-wrapper_3 {
      position: absolute;
      height: 6em;
      width: 6em;
      opacity: 0;
      transform: translate(11em, 2em) rotate(0deg);
      transform-origin: 50% 50%;
      transition: opacity 150ms, transform 500ms cubic-bezier(.26, 2.5, .46, .71);
    }

    .toggle-checkbox_3:checked~.toggle-slot_3 .moon-icon-wrapper_3 {
      opacity: 1;
      transform: translate(2em, 2em) rotate(-15deg);
    }`,
  },
  {
    id:"4",
    HtmlCode:`
    <label class="switch_4">
            <input type="checkbox">
            <span class="slider_4"></span>
          </label>`,
    CssCode:`
    .switch_4 {
      font-size: 17px;
      position: relative;
      display: inline-block;
      width: 3.5em;
      height: 2em;
    }

    /* Hide default HTML checkbox */
    .switch_4 input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider_4 {
      --background: #28096b;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--background);
      transition: .5s;
      border-radius: 30px;
    }

    .slider_4:before {
      position: absolute;
      content: "";
      height: 1.4em;
      width: 1.4em;
      border-radius: 50%;
      left: 10%;
      bottom: 15%;
      box-shadow: inset 8px -4px 0px 0px #fff000;
      background: var(--background);
      transition: .5s;
    }

    input:checked+.slider_4 {
      background-color: #522ba7;
    }

    input:checked+.slider_4:before {
      transform: translateX(100%);
      box-shadow: inset 15px -4px 0px 15px #fff000;
    }`,
  },
]

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('data-id');
const myParamLd = urlParams.get("data-ld");
const myParamSw = urlParams.get("data-sw");
const myParamCk = urlParams.get("data-ck");


for(let element of bigEdataBtn){
  if(myParam === element.id){
      console.log(element)
      document.getElementById('Animate').innerHTML = element.HtmlCode;

      document.getElementById('html-code').innerText = element.HtmlCode;
      document.getElementById('css-code').innerText = element.CssCode;
  }
}

for(let element of bigEdataLd){
  if(myParamLd === element.id){
      console.log(element)
      document.getElementById('Animate').innerHTML = element.HtmlCode;

      document.getElementById('html-code').innerText = element.HtmlCode;
      document.getElementById('css-code').innerText = element.CssCode;
  }
}


for(let element of bigEdataCk){
  if(myParamCk === element.id){
      console.log(element)
      document.getElementById('Animate').innerHTML = element.HtmlCode;
      document.getElementById('html-code').innerText = element.HtmlCode;
      document.getElementById('css-code').innerText = element.CssCode;
  }
}

for(let element of bigEdataSw){
  if(myParamSw === element.id){
      console.log(element)
      document.getElementById('Animate').innerHTML = element.HtmlCode;

      document.getElementById('html-code').innerText = element.HtmlCode;
      document.getElementById('css-code').innerText = element.CssCode;
  }
}


function copyHTML(){
  let CopyHTML = document.getElementById("html-code")
  navigator.clipboard.writeText(CopyHTML.innerText)
  // alert("copied the text" + CopyHTML.innerText)
  document.getElementById("btn-copy-html").innerText = "Copied"
  document.getElementById("btn-copy-css").innerText = "Ctrl + C"
}

function copyCss(){
  let CopyCSS = document.getElementById("css-code")
  navigator.clipboard.writeText(CopyCSS.innerText)
  // alert("copied the text" + CopyCSS.innerText)
  document.getElementById("btn-copy-css").innerText = "Copied"
  document.getElementById("btn-copy-html").innerText = "Ctrl + C"
}


