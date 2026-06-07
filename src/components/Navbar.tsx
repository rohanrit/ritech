import React, { useState, useEffect } from 'react';
import { Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

interface NavbarProps {
  scrollRefs: Record<string, React.RefObject<HTMLDivElement>>;
}

interface NavbarItemProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
  scrollRef: React.RefObject<HTMLDivElement>;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ text, onClick, isActive, scrollRef }) => {
  const handleClick = () => {
    onClick();
    if (scrollRef.current) {
      window.scrollTo({ top: scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <li
      className={`relative leading-[160%] inline-block min-w-[49px] whitespace-nowrap text-md font-semibold ${
        isActive ? 'border-b-2 border-yellow-500' : ''
      }`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {text}
    </li>
  );
};

const Navbar: React.FC<NavbarProps> = ({ scrollRefs }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const menuItems = ["Home", "About", "Features", "Pricing", "Testimonial", "Contact"];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1125 && drawerOpen) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawerOpen]);

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
  };

  return (
    <>
      <header className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border text-left text-base text-background-paper font-montserrat">
        <div className="flex-1 bg-darkslategray-200 box-border overflow-hidden flex flex-row items-start justify-start pt-[26px] px-[40px] pb-6 max-w-full border-b-[1px] border-solid border-neutral-grey md:px-[34px] md:box-border">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0 ">
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <img
                  className="h-[30px] w-[30px] relative object-cover"
                  alt=""
                  src="/atom-editor@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="relative font-bold inline-block whitespace-nowrap">
                    RiTech
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[127px] md:w-[798px] md:gap-[32px] lg:gap-[63px] lg:hidden">
              <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                  <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[30px] text-left text-base text-ghostwhite">
                    {menuItems.map((item, index) => (
                      <NavbarItem
                        key={index}
                        text={item}
                        onClick={() => handleMenuItemClick(item)}
                        isActive={activeMenuItem === item}
                        scrollRef={scrollRefs[item]}
                      />
                    ))}
                  </nav>
                </div>
              </div>
              <div className="w-[186px] flex flex-row items-start justify-start gap-[30px]">
                <Button
                  className="h-12 flex-1"
                  sx={{
                    textTransform: 'none',
                    color: '#ac6cff',
                    borderRadius: '15px',
                    background: 'transparent',
                    '&:hover': { background: '#ffffff' },
                    height: 48,
                  }}
                >
                  Login
                </Button>
                <Button
                  className="h-12 flex-1"
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    color: '#f8f9ff',
                    background: '#ac6cff',
                    borderRadius: '15px',
                    '&:hover': { background: '#f2eef6', color: '#ac6cff' },
                    height: 48,
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </header>
      <div>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: '#333',
              color: 'white',
              minWidth: '250px'
            },
            '& .MuiTypography-root': {
              fontFamily: 'inherit',
            },
          }}>
          <div
            className="p-4 outline-none"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem key={index} button>
                  <ListItemText primary={<NavbarItem
                    key={index}
                    text={item}
                    onClick={() => handleMenuItemClick(item)}
                    isActive={activeMenuItem === item}
                    scrollRef={scrollRefs[item]}
                  />} />
                </ListItem>
              ))}
              <ListItem>
                <Button
                  className="h-12 flex-1"
                  sx={{
                    textTransform: 'none',
                    color: '#ac6cff',
                    borderRadius: '15px',
                    background: 'transparent',
                    '&:hover': { background: '#ffffff' },
                    height: 48,
                  }}
                >
                  Login
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  className="h-12 flex-1"
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    color: '#f8f9ff',
                    background: '#ac6cff',
                    borderRadius: '15px',
                    '&:hover': { background: '#f2eef6', color: '#ac6cff' },
                    height: 48,
                  }}
                >
                  Sign Up
                </Button>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
