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
                      alt="Supabase Logo"
                      fetchPriority="high"
                      width="124"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="dark:hidden color: transparent"
                      srcSet="
                        _next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--light.daaeffd3.png&amp;w=128&amp;q=75t.daaeffd3.png&amp;w=128&amp_next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--light.daaeffd3.png&amp;w=256&amp;q=75ark--light.daaeffd3.png&amp;w=256&amp;q=75 2x
                      "
                      src="_next/image%3Furl=%252F_next%252Fstatic%252Fmedia%252Fsupabase-logo-wordmark--light.daaeffd3.png&amp;w=256&amp;q=75"
                    />
                    <img
                      alt="Supabase Logo"
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
    </div>
  );
}
