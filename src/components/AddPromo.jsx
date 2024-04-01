import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const PromoCardAdminActions = () => {
  const { user } = useContext(AuthContext);

  const isAdmin = user && user.role === 'admin';

  return (
    <div>
      {isAdmin && (
        <>
          <button onClick={handleCreate}>Create Promo</button>
          <button onClick={handleUpdate}>Update Promo</button>
          <button onClick={handleDelete}>Delete Promo</button>
        </>
      )}
    </div>
  );
};

export default PromoCardAdminActions;