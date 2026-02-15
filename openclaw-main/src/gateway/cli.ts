// Warn when binding to 127.0.0.1 with Docker port mapping
if (config.gateway.bind === '127.0.0.1' && process.env.DOCKER_CONTAINER) {
  console.warn(
    '⚠️ SECURITY WARNING: Binding to 127.0.0.1 inside Docker blocks port mapping.\n' +
    '   Use --bind 0.0.0.0 or set OPENCLAW_GATEWAY_BIND=0.0.0.0'
  );
}