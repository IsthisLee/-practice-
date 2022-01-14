import boto3, os, glob
from botocore.exceptions import ClientError
from urllib import parse

bucketName = 'aws-s3-perflower2'

s3 = boto3.client(
        's3',  # 사용할 서비스 이름, ec2이면 'ec2', s3이면 's3', dynamodb이면 'dynamodb'
        aws_access_key_id="AKIAZE5ACPNGILEXNFCU",         # 액세스 ID
        aws_secret_access_key="/8sWboNy7OiH5IqDyycRhrchgYC51c59PLPFtpBq")    # 비밀 엑세스 키

def create_s3_bucket(bucket_name):
    print("Creating a bucket... " + bucket_name)

    try:
        response = s3.create_bucket(
            Bucket=bucket_name,
            CreateBucketConfiguration={
                'LocationConstraint': 'ap-northeast-2' # Seoul  # us-east-1을 제외한 지역은 LocationConstraint 명시해야함.
            }
        )
        return response
    except ClientError as e:
        if e.response['Error']['Code'] == 'BucketAlreadyOwnedByYou':
            print("Bucket already exists. skipping..")
        else:
            print("Unknown error, exit..")


response = create_s3_bucket(bucket_name=bucketName)
print("Bucket : " + str(response))

input_path = "/Users/isthis/Documents/2021/Programming/Practice/AllPractice/pythonprac/img/"
files = glob.glob(os.path.join(input_path,'*'))
stored_names = list(map(lambda x: x.split("/")[10], files))
print(files)
print(stored_names)

for file,name in zip(files,stored_names):
    s3.upload_file(file,bucketName,name)
    changedUrl = parse.quote(name)
    changedUrl = changedUrl.replace('%20', '+')
    print(f'https://{bucketName}.s3.ap-northeast-2.amazonaws.com/' + changedUrl)