import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DehazeIcon from "@material-ui/icons/Dehaze";
import styled from "styled-components";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <DehazeIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <a className="menulink" href="#home">
            Home
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className="menulink" href="#about">
            About
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className="menulink" href="#contact">
            Contact Us
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className="menulink" href="#projects">
            Past Project{" "}
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
