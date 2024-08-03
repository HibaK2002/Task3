import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import PendingIcon from '@mui/icons-material/Pending';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CancelIcon from '@mui/icons-material/Cancel';

const iconStyle = { color: '#E50916', fontSize: 100, margin: '10px' }; 
const labelStyle = { fontSize: '14px', color: '#333', textAlign: 'center', marginTop: '5px' }; 

function SectionSix() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AccountCircleIcon style={iconStyle} />
          <p style={labelStyle}>Account</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PhotoSizeSelectActualIcon style={iconStyle} />
          <p style={labelStyle}>Photo</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VideoCameraBackIcon style={iconStyle} />
          <p style={labelStyle}>Video</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RepeatOnIcon style={iconStyle} />
          <p style={labelStyle}>Repeat</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowCircleDownIcon style={iconStyle} />
          <p style={labelStyle}>Arrow</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PendingIcon style={iconStyle} />
          <p style={labelStyle}>Pending</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PlayCircleFilledWhiteIcon style={iconStyle} />
          <p style={labelStyle}>Play</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PlayCircleOutlineIcon style={iconStyle} />
          <p style={labelStyle}>Outline</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ManageAccountsIcon style={iconStyle} />
          <p style={labelStyle}>Manage</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VideoCameraBackIcon style={iconStyle} />
          <p style={labelStyle}>Video</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ManageAccountsIcon style={iconStyle} />
          <p style={labelStyle}>Manage</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CancelIcon style={iconStyle} />
          <p style={labelStyle}>Cancel</p>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
