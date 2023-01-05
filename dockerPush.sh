 #! /bin/bash
for target in consumer driver gql producer
do
   # docker build --build-arg TARGET_APP=$target -t $1/wums-$target:$2  ./ 
   # docker push $1/wums-$target:$2
   echo target: $target 
done