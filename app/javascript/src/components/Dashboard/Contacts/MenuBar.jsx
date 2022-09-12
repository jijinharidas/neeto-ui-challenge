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
        {MENUBAR_BLOCKS.main.map(menubarBlock => (
          <NeetoMenuBar.Block
            active={menubarBlock.active}
            count={menubarBlock.count}
            key={menubarBlock.label}
            label={menubarBlock.label}
          />
        ))}
        <NeetoMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
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
        {MENUBAR_BLOCKS.segments.map(menubarBlock => (
          <NeetoMenuBar.Block
            count={menubarBlock.count}
            key={menubarBlock.label}
            label={menubarBlock.label}
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
        {MENUBAR_BLOCKS.tags.map(menubarBlock => (
          <NeetoMenuBar.Block
            count={menubarBlock.count}
            key={menubarBlock.label}
            label={menubarBlock.label}
          />
        ))}
      </NeetoMenuBar>
    </div>
  );
};

export default MenuBar;
