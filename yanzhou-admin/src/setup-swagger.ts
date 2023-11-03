import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

let fs = require('fs');

export function setupSwagger(app: INestApplication): void {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('砚舟')
    .setDescription('Api文档')
    .setLicense('MIT', 'https://www.baidu.com')
    // .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`swagger-ui`, app, document);

  fs.writeFileSync('src/public/swagger-spec.json', JSON.stringify(document));
}
