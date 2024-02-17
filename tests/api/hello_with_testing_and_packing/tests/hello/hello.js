function test_hello() {

  let status = false;

  try {

    const addon = require("../../lib/addon.node");

    console.log(addon.hello());

    status = true;

  } catch(e) {

    console.log(`${e}`);
  }

  return status;
};

const res_test_hello = test_hello();

if((!res_test_hello))
{
  console.log("'test_hello()' failed.");
  return false;
}

console.log("'test_hello()' passed.");
return true;
