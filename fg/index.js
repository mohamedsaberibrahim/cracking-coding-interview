const { Command } = require('commander');
const fs = require('fs');
const handlebars = require('handlebars');

const program = new Command();

program
  .name('generate')
  .description('Generate a file and its test case')
  .requiredOption('-n, --filename <filename>, File Name')
  .option('-t, --type <type>', 'File type (e.g. js, ts)')
  .option('-d, --description <description>', 'File description')

program.parse(process.argv);
const options = program.opts();

// Define template variables based on options
const vars = {
  filename: options.filename || '',
  description: options.description || '',
  // Add any other necessary variables here
};

// Read file and test case templates
const fileTemplate = fs.readFileSync(`${__dirname}/templates/fileTemplate.hbs`, 'utf8');
const testTemplate = fs.readFileSync(`${__dirname}/templates/testCaseTemplate.hbs`, 'utf8');

// Compile templates using Handlebars
const compiledFileTemplate = handlebars.compile(fileTemplate);
const compiledTestTemplate = handlebars.compile(testTemplate);

// Generate file and test case content
const fileContent = compiledFileTemplate(vars);
const testContent = compiledTestTemplate(vars);

// Write file and test case to disk
fs.writeFileSync(`${vars.filename}.${options.type || 'ts'}`, fileContent);
fs.writeFileSync(`${vars.filename}.test.${options.type || 'ts'}`, testContent);

console.log(`File and test case generated: ${vars.filename}.${options.type || 'ts'}`);

