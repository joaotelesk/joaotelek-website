export function Toast() {
  return (
    <>
      <div
        id="toast-simple"
        className=" fixed items-center top-0 flex mt-3  w-auto p-2 space-x-4 text-white-200 bg-white divide-x divide-white-500 rounded-lg shadow dark:text-white-400 dark:divide-white-200 space-x dark:bg-purple-500"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4 text-white-500 dark:text-white-500"
          focusable="false"
          data-prefix="fas"
          data-icon="paper-plane"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
          ></path>
        </svg>
        <div className="pl-2 text-xs font-normal">
          Mensagem enviada com sucessso.
        </div>
      </div>
    </>
  );
}
