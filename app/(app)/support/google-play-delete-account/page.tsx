import React from 'react';

const GooglePlayDeleteAccountPage = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>How to Delete Your Account (Google Play)</h1>
      <p style={{ marginBottom: 16 }}>
        If you signed up or logged in using Google Play, you can request to delete your account and associated data by following these steps:
      </p>
      <ol style={{ marginBottom: 16, paddingLeft: 20 }}>
        <li>Open the app and log in to your account.</li>
        <li>Go to <b>Profile</b> &gt; <b>Account Settings</b>.</li>
        <li>Scroll down and select <b>Delete Account</b>.</li>
        <li>Follow the on-screen instructions to confirm your request.</li>
      </ol>
      <p style={{ marginBottom: 16 }}>
        <b>Note:</b> Deleting your account is permanent. All your data, purchases, and progress will be removed and cannot be recovered.
      </p>
      <p>If you have any issues, please contact our support team for assistance.</p>
    </div>
  );
};

export default GooglePlayDeleteAccountPage; 