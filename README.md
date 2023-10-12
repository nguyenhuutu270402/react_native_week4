
# Step 1: Create an account and log in on npmjs.com

# Step 2: Change module name, version, author information,...
## Open the package.json file in the react-native-tamara-sdk folder and change the module name, version, author, homepage link,...

# Step 3: Publish to npmjs.com
## cd react-native-tamara-sdk
## npm install
## npm login
## npm publish
### And now you can find your module on npmjs.com with the same module name as the one in the package.json file

# Step 4: Use it in your project
## Install: npm i "module_name".
### Example: npm i react-native-tamara-sdk-test
## Then import and use in your project
### Example: 
Import function
```
import { orderDetail } from 'react-native-tamara-sdk-test'
```
After get response json string and parse to json
```
const result = await orderDetail(orderId);
const data = JSON.parse(result)
```
