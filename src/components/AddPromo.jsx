import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const PromoCardAdminActions = () => {
  const { user } = useContext(AuthContext);

  // Check if the user has admin role
  const isAdmin = user && user.role === 'admin';

  return (
    <div>
      {/* Only render the CRUD operations if the user is an admin */}
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