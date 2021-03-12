import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Wrap, WrapItem } from '@chakra-ui/react';
import Stamp from 'components/Stamp/Stamp';
import Draw from 'components/Draw/Draw';
import Shape from 'components/Shape/Shape';
import { useFabricOverlayState } from 'context/fabric-overlay-context';
import TypeText from 'components/TypeText/TypeText';
import { FaHighlighter } from 'react-icons/fa';
import ToolbarButton from 'components/Toolbar/Button';
import ToolbarPointer from 'components/Toolbar/PointerControl';
import RemoveObject from 'components/RemoveObject';
import Color from 'components/Color/Color';

import 'styles/styles.css';

function Toolbar() {
  const { activeTool } = useFabricOverlayState();

  return (
    <Box pt={3} position="relative">
      <Wrap spacing="2" as="nav" direction="column" align="center">
        {/* <WrapItem>
          <Color isActive={activeTool === 'COLOR'} />
        </WrapItem> */}

        <WrapItem>
          <ToolbarPointer isActive={activeTool === 'POINTER'} />
        </WrapItem>

        <WrapItem>
          <TypeText isActive={activeTool === 'TYPE'} />
        </WrapItem>

        <WrapItem>
          <Draw isActive={activeTool === 'DRAW'} />
        </WrapItem>

        <WrapItem>
          <Shape isActive={activeTool === 'SHAPE'} />
        </WrapItem>

        <WrapItem>
          <Stamp isActive={activeTool === 'STAMP'} />
        </WrapItem>

        <WrapItem>
          <ToolbarButton icon={<FaHighlighter />} label="Highlight" disabled />
        </WrapItem>

        <WrapItem>
          <Divider />
        </WrapItem>

        <WrapItem>
          <RemoveObject />
        </WrapItem>

        <WrapItem>
          <Divider />
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default Toolbar;
