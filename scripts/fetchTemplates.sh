#!/bin/bash

wget https://github.com/soleo/skeleton/archive/master.zip && \
unzip master.zip && \
rm -rf ../generators/app/templates && \
mv skeleton-master ../generators/app/templates && \
sed -i 's/:author_name/<%= authorName %>/g' ../generators/app/templates/*.* && \
sed -i 's/:author_username/<%= authorUsername %>/g' ../generators/app/templates/*.* && \
sed -i 's/:author_website/<%= authorWebsite %>/g' ../generators/app/templates/*.* && \
sed -i 's/:author_email/<%= authorEmail %>/g' ../generators/app/templates/*.* && \
sed -i 's/:vendor/<%= vendor %>/g' ../generators/app/templates/*.* && \
sed -i 's/:package_name/<%= packageName %>/g' ../generators/app/templates/*.* && \
sed -i 's/:package_description/<%= packageDescription %>/g' ../generators/app/templates/*.* &&\
rm -rf master.zip
