import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoMenuBar } from "neetoui/layouts";

import { MENUBAR_BLOCKS } from "./constants";

const MenuBar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  return (
    <div className="flex">
      <NeetoMenuBar showMenu title="Notes">
        {MENUBAR_BLOCKS.main.map(menubar_block => (
          <NeetoMenuBar.Block
            active={menubar_block.active}
            count={menubar_block.count}
            key={menubar_block.label}
            label={menubar_block.label}
          />
        ))}
        <NeetoMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </NeetoMenuBar.SubTitle>
        <NeetoMenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {MENUBAR_BLOCKS.segments.map(menubar_block => (
          <NeetoMenuBar.Block
            count={menubar_block.count}
            key={menubar_block.label}
            label={menubar_block.label}
          />
        ))}
        <NeetoMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
            },
            {
              icon: Plus,
            },
            {
              icon: Settings,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </NeetoMenuBar.SubTitle>
        {MENUBAR_BLOCKS.tags.map(menubar_block => (
          <NeetoMenuBar.Block
            count={menubar_block.count}
            key={menubar_block.label}
            label={menubar_block.label}
          />
        ))}
      </NeetoMenuBar>
    </div>
  );
};

export default MenuBar;
