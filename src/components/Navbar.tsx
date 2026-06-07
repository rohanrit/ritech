import React, { useState, useEffect } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
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
      className={`relative leading-[160%] inline-block min-w-[49px] whitespace-nowrap text-sm font-mono font-medium tracking-wider uppercase transition-all duration-300 ${
        isActive
          ? 'text-brand-glow'
          : 'text-slate-400 hover:text-brand-cyan'
      }`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-glow shadow-neon-glow" />
      )}
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
    return () => window.removeEventListener('resize', handleResize);
  }, [drawerOpen]);

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-dark/10 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <a href="#" className="flex items-center space-x-3 group">
            <img
              className="h-9 w-auto object-contain"
              alt="RiTech"
              src="/ritech-logo.png"
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
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

          <div className="hidden lg:flex items-center space-x-4">
            <button className="relative px-4 py-2 text-xs font-mono font-semibold text-brand-glow rounded-md border border-brand-cyan/30 bg-brand-cyan/5 hover:bg-brand-cyan/10 transition-all shadow-neon-glow">
              SYS_ACTIVE
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: '#00F0FF' }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </header>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#0B1329',
            borderLeft: '1px solid #1E293B',
            color: '#f8f9ff',
            minWidth: '250px',
          },
        }}
      >
        <div
          className="p-4 outline-none"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="flex items-center mb-8 mt-4 px-2">
            <img
              className="h-8 w-auto object-contain"
              alt="RiTech"
              src="/ritech-logo.png"
            />
          </div>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                <ListItemText
                  primary={
                    <span
                      className={`block px-4 py-2 rounded-md text-sm font-mono tracking-wider uppercase transition-all ${
                        activeMenuItem === item
                          ? 'text-brand-glow bg-brand-cyan/5 border border-brand-cyan/20'
                          : 'text-slate-400 hover:text-brand-cyan hover:bg-brand-border/30'
                      }`}
                      onClick={() => {
                        handleMenuItemClick(item);
                        if (scrollRefs[item]?.current) {
                          window.scrollTo({ top: scrollRefs[item].current!.offsetTop, behavior: 'smooth' });
                        }
                      }}
                    >
                      {item}
                    </span>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
