import React, { useState, useEffect } from "react";
import { post } from '../services/authService'

const PromoCardAdminActions = () => {
  const { user } = useContext(AuthContext);

  const isAdmin = user && user.role === 'admin';

  return (
    <div>
      {isAdmin && (
        <>
          <button onClick={handleCreate}>Create Promo</button>
          <button onClick={handleDelete}>Delete Promo</button>
        </>
      )}
    </div>
  );
};

export default PromoCardAdminActions;