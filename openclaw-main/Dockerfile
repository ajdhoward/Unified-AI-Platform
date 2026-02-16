# Detect Docker environment and auto-bind to 0.0.0.0
ENV DOCKER_CONTAINER=1

# Override default CMD to bind to all interfaces in Docker
CMD ["node", "openclaw.mjs", "gateway", "--allow-unconfigured", "--bind", "0.0.0.0"]