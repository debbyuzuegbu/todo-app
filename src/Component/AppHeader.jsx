import React from 'react';
import Button, { SelectButton } from './Button';

function AppHeader() {
  return (
    <div>
      <h1>Hello from this part</h1>
      <Button variant="primary">Click Me</Button>
      <SelectButton>
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
