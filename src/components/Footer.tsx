import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lilac text-gray-800 p-4 text-center">
      <p className="mt-1 mb-4">&copy; 2024 Julia Paier</p>
      <div className="container mx-auto flex justify-center space-x-4">
        <a
          href="www.linkedin.com/in/julia-paier-489362183"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="w-8 h-8"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
        </a>

        <a
          href="https://github.com/JPcookie290"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            viewBox="0 0 72 72"
            className="w-8 h-8"
          >
            <path d="M36 12C22.745 12 12 22.745 12 36c0 13.255 10.745 24 24 24s24-10.745 24-24C60 22.745 49.255 12 36 12zM36 20c8.837 0 16 7.163 16 16 0 7.284-4.871 13.42-11.531 15.355-.27-.252-.527-.612-.516-1.07.027-1.052.054-3.506.054-4.408 0-1.548-.98-2.647-.98-2.647s7.681.086 7.681-8.111c0-3.162-1.651-4.809-1.651-4.809s.868-3.377-.301-4.809c-1.31-.142-3.656 1.252-4.658 1.903 0 0-1.587-.651-4.228-.651s-3.587.651-3.587.651c-1.001-.651-3.348-2.045-4.658-1.903-1.169 1.432-.301 4.809-.301 4.809s-1.654 1.647-1.654 4.809c0 8.197 7.682 8.111 7.682 8.111s-.874.996-.963 2.422c-.514.181-1.214.396-1.882.396-1.61 0-2.834-1.565-3.283-2.289-.443-.714-1.351-1.312-2.197-1.312-.557 0-.828.28-.828.598 0 .318.782.541 1.297 1.131 1.087 1.245 1.066 4.043 4.938 4.043.459 0 1.283-.103 1.939-.193-.003.879-.013 1.72.001 2.26.011.415-.2.747-.441.994C20.726 49.252 16 43.178 16 36 16 27.163 23.163 20 32 20z"></path>
          </svg>
        </a>
      </div>
      <p className="mt-1 text-sm">
        Icons by{" "}
        <a
          href="https://icons8.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Icons8
        </a>
      </p>
    </footer>
  );
};

export default Footer;
