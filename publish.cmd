set /p msg=Commit message: 
call npm version patch
call git add *
call git commit -m "%msg%"
call git push
call npm publish