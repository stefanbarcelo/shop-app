import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="innerNav">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48.52"
            height="48.52"
            viewBox="0 0 48.52 48.52"
          >
            <g
              id="Group_9"
              data-name="Group 9"
              transform="translate(19.693 1.443) rotate(45)"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M31.394,9.088l2.834-5.63L28.6,6.294,28.24,0,24.783,5.27,21.325,0l-.24,4.232a12.325,12.325,0,1,0-.045,17.386l.045-.045.24,4.232,3.458-5.269,3.456,5.27.36-6.294,5.629,2.836-2.834-5.63,6.292-.358L32.417,12.9l5.269-3.458ZM24.122,12.9a11.7,11.7,0,0,1-2.583,7.362l-.043-.781-.047-.808-.721.366-4.2,2.112,2.114-4.195.364-.724-.806-.045-4.691-.268,3.928-2.575.677-.444-.677-.444L13.512,9.885,18.2,9.617l.806-.045-.364-.724L16.531,4.654l4.2,2.112.721.366.047-.808.043-.781A11.7,11.7,0,0,1,24.122,12.9Z"
                transform="translate(0 0)"
                fill="none"
                stroke="#d9dee0"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
        <div className="menuBtnCon">
          <div className="menu">
           <p>menu</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
