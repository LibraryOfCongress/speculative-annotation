import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';

function SiteTeach(props) {
  return (
    <Box as="section" mt={6}>
      <Stack spacing={6}>
        <Heading>Teach</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          pulvinar neque laoreet suspendisse interdum. Ipsum dolor sit amet
          consectetur adipiscing elit duis. Pulvinar etiam non quam lacus
          suspendisse faucibus interdum posuere lorem. Volutpat sed cras ornare
          arcu. Adipiscing diam donec adipiscing tristique. Ultricies integer
          quis auctor elit sed vulputate mi sit. Netus et malesuada fames ac
          turpis egestas maecenas pharetra convallis. Mi proin sed libero enim
          sed faucibus turpis in eu. Ultricies mi eget mauris pharetra et. Odio
          ut enim blandit volutpat maecenas volutpat. Amet mauris commodo quis
          imperdiet massa. Egestas maecenas pharetra convallis posuere morbi
          leo. Morbi tristique senectus et netus et. Proin sed libero enim sed
          faucibus turpis in eu.
        </Text>

        <Text>
          Quis varius quam quisque id. Pellentesque elit ullamcorper dignissim
          cras tincidunt lobortis feugiat vivamus at. Morbi tristique senectus
          et netus et malesuada fames. Lectus sit amet est placerat in.
          Ultricies mi quis hendrerit dolor magna. Ridiculus mus mauris vitae
          ultricies leo integer malesuada nunc. Quis auctor elit sed vulputate
          mi. Morbi tincidunt augue interdum velit euismod in pellentesque.
          Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Morbi
          tristique senectus et netus. At consectetur lorem donec massa. Sed
          blandit libero volutpat sed cras. Id semper risus in hendrerit
          gravida. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Est
          ullamcorper eget nulla facilisi etiam dignissim diam.
        </Text>
        <Divider />
      </Stack>
    </Box>
  );
}

SiteTeach.propTypes = {};

export default SiteTeach;
