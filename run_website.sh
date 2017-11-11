#!/bin/bash

# Get RVM, install ruby, and switch to the latest verions
$ \curl -L https://get.rvm.io | bash -s stable --rails --autolibs=enabled # Or, --ruby=1.9.3
rvm install 2.4
rvm use 2.4

# Grab our necessary Gems
gem install bundler
bundle install

# jekyll watches automatically for changes, so this should do it
bundle exec jekyll serve -w --incremental
