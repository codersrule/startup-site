export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-40 transform: translate3d(0, 0, 999px)">
        <div className="absolute inset-0 h-full w-full opacity-80 bg-background transition-opacity"></div>
        <nav className="relative z-40 border-default border-b backdrop-blur-sm transition-opacity">
          <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
            <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
              <div className="flex items-center">
                <div className="flex items-center flex-shrink-0">
                  <a
                    className="block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm"
                    href="index.html"
                  >
                    <img
                      alt="Site Logo"
                      fetchPriority="high"
                      width="124"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="dark:hidden color: transparent"
                      srcSet="
                      "
                      src=""
                    />
                    <img
                      alt="Site Logo"
                      fetchPriority="high"
                      width="124"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="hidden dark:block color: transparent"
                      srcSet="
                        _next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--dark.b36ebb5f.png&amp;w=128&amp;q=75k.b36ebb5f.png&amp;w=128&amp_next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--dark.b36ebb5f.png&amp;w=256&amp;q=75mark--dark.b36ebb5f.png&amp;w=256&amp;q=75 2x
                      "
                      src="_next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--dark.b36ebb5f.png&amp;w=256&amp;q=75"
                    />
                  </a>
                </div>
                <nav
                  aria-label="Main"
                  data-orientation="horizontal"
                  dir="ltr"
                  className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16"
                >
                  <div className="position: relative">
                    <ul
                      data-orientation="horizontal"
                      className="group flex flex-1 list-none items-center justify-center space-x-1"
                      dir="ltr"
                    >
                      <li className="text-sm font-medium">
                        <button
                          id="radix-:Rimcq6:-trigger-radix-:Rbimcq6:"
                          data-state="closed"
                          aria-expanded="false"
                          aria-controls="radix-:Rimcq6:-content-radix-:Rbimcq6:"
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none hover:bg-accent data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 group w-max group bg-transparent text-foreground hover:text-brand-link data-[state=open]:!text-brand-link data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter data-[radix-collection-item]:focus-visible:text-foreground p-2 h-auto"
                          data-radix-collection-item=""
                        >
                          Product
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                            aria-hidden="true"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </li>
                      <li className="text-sm font-medium">
                        <button
                          id="radix-:Rimcq6:-trigger-radix-:Rjimcq6:"
                          data-state="closed"
                          aria-expanded="false"
                          aria-controls="radix-:Rimcq6:-content-radix-:Rjimcq6:"
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none hover:bg-accent data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 group w-max group bg-transparent text-foreground hover:text-brand-link data-[state=open]:!text-brand-link data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter data-[radix-collection-item]:focus-visible:text-foreground p-2 h-auto"
                          data-radix-collection-item=""
                        >
                          Developers
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                            aria-hidden="true"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </li>
                      <li className="text-sm font-medium">
                        <a
                          className="group/menu-item flex items-center text-sm hover:text-foreground select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                          data-radix-collection-item=""
                          href="docs/pricing.html"
                        >
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-1">
                              <p className="leading-snug text-foreground group-hover/menu-item:text-brand-link">
                                Pricing
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="text-sm font-medium">
                        <a
                          className="group/menu-item flex items-center text-sm hover:text-foreground select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                          data-radix-collection-item=""
                          href="docs/resources.html"
                        >
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-1">
                              <p className="leading-snug text-foreground group-hover/menu-item:text-brand-link">
                                Docs
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="text-sm font-medium">
                        <a
                          className="group/menu-item flex items-center text-sm hover:text-foreground select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                          data-radix-collection-item=""
                          href="blog.html"
                        >
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-1">
                              <p className="leading-snug text-foreground group-hover/menu-item:text-brand-link">
                                Blog
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute left-0 top-full flex justify-center"></div>
                </nav>
              </div>
            </div>
            <div className="inset-y-0 flex mr-2 items-center px-4 lg:hidden">
              <button
                className="text-foreground-lighter focus:ring-brand bg-background hover:bg-surface-100 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <main className="relative min-h-screen">
        <div className="relative -mt-[65px]">
          <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 md:pt-16 overflow-hidden">
            <div className="relative">
              <div className="mx-auto">
                <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
                  <div className="relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8">
                    <div className="flex flex-col items-center">
                      <h1 className="text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl">
                        <span className="block bg-clip-text bg-gradient-to-b from-foreground to-foreground-light">
                          Build in a weekend
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3ECF8E] via-[#3ECF8E] to-[#3ecfb2] block md:ml-0">
                          Scale to millions
                        </span>
                      </h1>
                      <p className="pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
                        Supabase is an open source Firebase alternative.
                        <br className="hidden md:block" />
                        Start your project with a Postgres database,
                        Authentication, instant APIs, Edge Functions, Realtime
                        subscriptions, Storage, and Vector embeddings.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        data-size="medium"
                        type="button"
                        className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button hover:bg-brand-button/80 border-brand focus-visible:outline-brand-600 shadow-sm data-[state=open]:bg-brand-button/80 data-[state=open]:outline-brand-600 text-sm px-4 py-2 h-[38px] text-white"
                        href="dashboard.html"
                      >
                        <span className="truncate">Start your project</span>
                      </a>
                      <a
                        data-size="medium"
                        type="button"
                        className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover shadow-sm text-sm px-4 py-2 h-[38px]"
                        href="docs/resources.html"
                      >
                        <div className="[&amp;_svg]:h-[20px] [&amp;_svg]:w-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="sbui-icon"
                          >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        </div>
                        <span className="truncate">Documentation</span>
                      </a>
                    </div>
                    <div className="flex text-center flex-col items-center mt-4 lg:mt-6">
                      <small className="small !text-foreground-light">
                        Works seamlessly with 20+ frameworks
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-alternative" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="w-full !py-0">
          <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 grid grid-cols-2 md:flex items-center justify-between text-foreground md:justify-center gap-8 md:gap-16 xl:gap-28 text-sm">
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
              We protect your data.
              <a className="text-brand hover:underline" href="security.html">
                More on Security
              </a>
            </div>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center md:items-center">
              <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                SOC2 Type 2
                <span className="text-foreground-lighter hidden sm:inline">
                  Certified
                </span>
              </li>
              <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                HIPAA
                <span className="text-foreground-lighter hidden sm:inline">
                  Compliant
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
        <div className="sm:py-18 container relative mx-auto px-6 md:py-24 lg:px-16 lg:py-24 xl:px-20 py-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <a className="w-40" href="index.html">
                <img
                  alt="Supabase"
                  loading="lazy"
                  width="160"
                  height="30"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet="
                    _next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--dark.b36ebb5f.png&amp;w=256&amp;q=756ebb5f.png&amp;w=256&amp_next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--dark.b36ebb5f.png&amp;w=384&amp;q=75--dark.b36ebb5f.png&amp;w=384&amp;q=75 2x
                  "
                  src="_next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--dark.b36ebb5f.png&amp;w=384&amp;q=75"
                />
              </a>
              <div className="flex space-x-5">
                <a
                  href="https://twitter.com/supabase"
                  className="text-foreground-lighter hover:text-foreground transition"
                >
                  <span className="sr-only">Twitter</span>
                  <div className="relative" style={{ width: 22, height: 22 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="none"
                      className="sbui-icon"
                      width="100%"
                      height="100%"
                    >
                      <path
                        fill="currentColor"
                        d="M12.6009 0.903908H15.0544L9.69434 7.03008L16 15.3664H11.0627L7.19566 10.3105L2.77087 15.3664H0.31595L6.04904 8.81379L0 0.903908H5.06262L8.55811 5.52524L12.6009 0.903908ZM11.7399 13.8979H13.0993L4.32392 2.29528H2.86506L11.7399 13.8979Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://github.com/supabase"
                  className="text-foreground-lighter hover:text-foreground transition"
                >
                  <span className="sr-only">GitHub</span>
                  <div className="relative" style={{ width: 22, height: 22 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="none"
                      className="sbui-icon"
                      width="100%"
                      height="100%"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 0C3.5816 0 0 3.58719 0 8.01357C0 11.5535 2.292 14.5575 5.4712 15.6167C5.8712 15.6903 6.0168 15.4431 6.0168 15.2303C6.0168 15.0407 6.0104 14.5359 6.0064 13.8679C3.7808 14.3519 3.3112 12.7935 3.3112 12.7935C2.948 11.8671 2.4232 11.6207 2.4232 11.6207C1.6968 11.1247 2.4784 11.1343 2.4784 11.1343C3.2808 11.1903 3.7032 11.9599 3.7032 11.9599C4.4168 13.1839 5.576 12.8303 6.0312 12.6255C6.1048 12.1079 6.3112 11.7551 6.54 11.5551C4.764 11.3527 2.896 10.6647 2.896 7.59438C2.896 6.71998 3.208 6.00398 3.7192 5.44398C3.6368 5.24158 3.3624 4.42639 3.7976 3.32399C3.7976 3.32399 4.4696 3.10799 5.9976 4.14479C6.65022 3.9668 7.32355 3.87614 8 3.87519C8.68 3.87839 9.364 3.96719 10.0032 4.14479C11.5304 3.10799 12.2008 3.32319 12.2008 3.32319C12.6376 4.42639 12.3624 5.24158 12.2808 5.44398C12.7928 6.00398 13.1032 6.71998 13.1032 7.59438C13.1032 10.6727 11.232 11.3503 9.4504 11.5487C9.73762 11.7959 9.99282 12.2847 9.99282 13.0327C9.99282 14.1031 9.98322 14.9679 9.98322 15.2303C9.98322 15.4447 10.1272 15.6943 10.5336 15.6159C12.1266 15.0816 13.5115 14.0602 14.4924 12.696C15.4733 11.3318 16.0007 9.69382 16 8.01357C16 3.58719 12.4176 0 8 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://discord.supabase.com/"
                  className="text-foreground-lighter hover:text-foreground transition"
                >
                  <span className="sr-only">Discord</span>
                  <div className="relative" style={{ width: 22, height: 22 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="none"
                      className="sbui-icon"
                      width="100%"
                      height="100%"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5447 3.01094C12.5249 2.54302 11.4313 2.19828 10.2879 2.00083C10.2671 1.99702 10.2463 2.00654 10.2356 2.02559C10.0949 2.27573 9.93921 2.60206 9.83011 2.85856C8.60028 2.67444 7.3768 2.67444 6.17222 2.85856C6.06311 2.59636 5.90166 2.27573 5.76038 2.02559C5.74966 2.00717 5.72887 1.99765 5.70803 2.00083C4.56527 2.19764 3.47171 2.54239 2.45129 3.01094C2.44246 3.01475 2.43488 3.0211 2.42986 3.02935C0.355594 6.12826 -0.212633 9.151 0.06612 12.1362C0.067381 12.1508 0.0755799 12.1648 0.0869319 12.1737C1.45547 13.1787 2.78114 13.7889 4.08219 14.1933C4.10301 14.1996 4.12507 14.192 4.13832 14.1749C4.44608 13.7546 4.72043 13.3114 4.95565 12.8454C4.96953 12.8181 4.95628 12.7857 4.92791 12.7749C4.49275 12.6099 4.0784 12.4086 3.67982 12.18C3.64829 12.1616 3.64577 12.1165 3.67477 12.095C3.75865 12.0321 3.84255 11.9667 3.92264 11.9007C3.93713 11.8886 3.95732 11.8861 3.97435 11.8937C6.59287 13.0892 9.42771 13.0892 12.0153 11.8937C12.0323 11.8854 12.0525 11.888 12.0677 11.9C12.1478 11.9661 12.2316 12.0321 12.3161 12.095C12.3451 12.1165 12.3433 12.1616 12.3117 12.18C11.9131 12.413 11.4988 12.6099 11.063 12.7743C11.0346 12.7851 11.022 12.8181 11.0359 12.8454C11.2762 13.3108 11.5505 13.7539 11.8526 14.1742C11.8652 14.192 11.8879 14.1996 11.9087 14.1933C13.2161 13.7889 14.5417 13.1787 15.9103 12.1737C15.9223 12.1648 15.9298 12.1515 15.9311 12.1369C16.2647 8.6856 15.3723 5.68765 13.5655 3.02998C13.5611 3.0211 13.5535 3.01475 13.5447 3.01094ZM5.34668 10.3185C4.55833 10.3185 3.90876 9.59478 3.90876 8.70593C3.90876 7.81707 4.54574 7.09331 5.34668 7.09331C6.15393 7.09331 6.79722 7.82342 6.7846 8.70593C6.7846 9.59478 6.14762 10.3185 5.34668 10.3185ZM10.6632 10.3185C9.87481 10.3185 9.22527 9.59478 9.22527 8.70593C9.22527 7.81707 9.86221 7.09331 10.6632 7.09331C11.4704 7.09331 12.1137 7.82342 12.1011 8.70593C12.1011 9.59478 11.4704 10.3185 10.6632 10.3185Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com/c/supabase"
                  className="text-foreground-lighter hover:text-foreground transition"
                >
                  <span className="sr-only">Youtube</span>
                  <div className="relative" style={{ width: 22, height: 22 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="none"
                      className="sbui-icon"
                      width="100%"
                      height="100%"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.6657 4.13526C15.4817 3.44239 14.9395 2.8967 14.2511 2.71152C13.0033 2.37502 8 2.37502 8 2.37502C8 2.37502 2.99669 2.37502 1.74891 2.71152C1.06052 2.89673 0.518351 3.44239 0.334337 4.13526C1.90735e-06 5.39112 1.90735e-06 8.01137 1.90735e-06 8.01137C1.90735e-06 8.01137 1.90735e-06 10.6316 0.334337 11.8875C0.518351 12.5804 1.06052 13.1033 1.74891 13.2885C2.99669 13.625 8 13.625 8 13.625C8 13.625 13.0033 13.625 14.2511 13.2885C14.9395 13.1033 15.4817 12.5804 15.6657 11.8875C16 10.6316 16 8.01137 16 8.01137C16 8.01137 16 5.39112 15.6657 4.13526ZM6.36363 10.3904V5.63238L10.5454 8.01143L6.36363 10.3904Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                  <h6 className="text-foreground overwrite text-base">
                    Product
                  </h6>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="database.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Database
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="auth.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Auth
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="edge-functions.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Functions
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="realtime.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Realtime
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="storage.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Storage
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="vector.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Vector
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="docs/pricing.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Pricing
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="launch-week/index.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Launch Week X
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-foreground overwrite text-base">
                    Resources
                  </h6>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="support.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Support
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://status.supabase.com/">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          System Status
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="partners/index.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Become a Partner
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="partners/integrations.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Integrations
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="partners/experts.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Experts
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="brand-assets.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Brand Assets / Logos
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="security.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Security and Compliance
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="legal/dpa.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          DPA
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="security.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          SOC2
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://forms.supabase.com/hipaa2">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          HIPAA
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-foreground overwrite text-base">
                    Developers
                  </h6>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="docs/resources.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Documentation
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="changelog.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Changelog
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://supabase.com/docs/handbook/contributing">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Contributing
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="open-source.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Open Source
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="supasquad.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          SupaSquad
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://dev.to/supabase">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          DevTo
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="rss.xml">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          RSS
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-foreground overwrite text-base">
                    Company
                  </h6>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="blog.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Blog
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="blog/2020/12/02/case-study-tayfa.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Customer Stories
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="docs/careers.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Careers
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="company.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Company
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="terms.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Terms of Service
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="privacy.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Privacy Policy
                        </div>
                      </a>
                    </li>
                    <li>
                      <button>
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Privacy Settings
                        </div>
                      </button>
                    </li>
                    <li>
                      <a href="aup.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Acceptable Use Policy
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="support-policy.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Support Policy
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="docs/company/sla.html">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Service Level Agreement
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="humans.txt">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Humans.txt
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="lawyers.txt">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Lawyers.txt
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href=".well-known/security.txt">
                        <div className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                          Security.txt
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-default mt-32 flex justify-between border-t pt-8">
            <small className="small">© Supabase Inc</small>
            <div className="hidden">
              <button
                id="user-settings-dropdown"
                className="flex items-center justify-center h-7 w-7 text-foreground"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
                data-disabled=""
                disabled={false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sbui-icon h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sbui-icon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                <span className="sr-only">Toggle theme</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
