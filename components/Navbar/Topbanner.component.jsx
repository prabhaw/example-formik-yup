import { Box, Text } from "@chakra-ui/core";

const TopBanner = (props) => {
  return (
    <>
      <div className='topbanner'>
        <div className='container-space'>
          <Box fontSize='sm' pt='3px' textAlign='right'>
            <span className='topbar-text'>miles per hour</span>
            <span className='topbar-text'>miles per hour</span>
            <span className='topbar-text'>about</span>
          </Box>
        </div>
      </div>

      <style jsx>{`
        .topbanner {
          height: 26px;
          background: #ececec;
        }
      `}</style>
    </>
  );
};

export default TopBanner;
