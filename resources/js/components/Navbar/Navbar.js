import React from "react";

export default function Navbar() {
    return (
        <div>
        <MuiThemeProvider>
          <AppBar
            title="Test"
            onLeftIconButtonClick={this.handleDrawerClick.bind()}
          />

          <Drawer open={this.state.open}>
            <MenuItem onClick={this.handleMenuClick1.bind()}>Menu Item 1</MenuItem>
            <MenuItem onClick={this.handleMenuClick2.bind()}>Menu Item 2</MenuItem>
          </Drawer>

        </MuiThemeProvider>
        {this.menuControl()}
      </div>
    );
}
