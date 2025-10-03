import moduleAlias from 'module-alias';

moduleAlias.addAliases({
    '@application': __dirname + '/src/application',
    '@config': __dirname + '/src/config',
    '@domain': __dirname + '/src/domain',
    '@infrastructure': __dirname + '/src/infrastructure',
    '@auth': __dirname + '/src/presentation/modules/auth',
    '@portfolio': __dirname + '/src/presentation/modules/portfolio',
    '@server': __dirname + '/src/presentation/server'
});

moduleAlias();