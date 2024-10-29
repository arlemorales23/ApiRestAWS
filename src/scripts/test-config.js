const { testConnection } = require('../src/config/database');
const { s3 } = require('../src/config/aws-sdk');
const config = require('../src/config/config');

async function testConfiguration() {
  console.log('Testing configuration...');
  
  // Test database connection
  const dbConnected = await testConnection();
  console.log('Database connection:', dbConnected ? 'SUCCESS' : 'FAILED');
  
  // Test AWS configuration
  try {
    const buckets = await s3.listBuckets().promise();
    console.log('AWS S3 connection: SUCCESS');
    console.log('Available buckets:', buckets.Buckets.length);
  } catch (error) {
    console.log('AWS S3 connection: FAILED');
    console.error(error.message);
  }
  
  // Print current configuration
  console.log('\nCurrent Configuration:');
  console.log('Environment:', config.app.environment);
  console.log('Port:', config.app.port);
  console.log('Database Host:', config.database.host);
}

testConfiguration().catch(console.error);