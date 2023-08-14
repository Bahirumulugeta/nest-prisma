// Import necessary modules
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// This is the entry function of the server
// Function defination
async function server() {
  // Set port value
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
// Call the function
server();
