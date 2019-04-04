# Preparаtion
    npm i
    npm i -g pm2
    
    cp config/local{.example,}.js       ## OR       cp config/local{.prod,}.js


# Start dev through pm2
    pm2 start dev.config.js

# Start prod through pm2
    pm2 start prod.config.js