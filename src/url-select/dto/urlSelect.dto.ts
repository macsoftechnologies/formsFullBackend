
export class addmore{
    addmore:string
}

export class values{
    Values:string
    status:string
}
export class allowUrls{
    Urls:urls[]
}

export class urls{
    urls:string
}


export class denyUrls{
    DenyUrls:denyurls[]
}

export class denyurls{
    Denyurl:string
}
export class urlSelectDto{
   
    
   allow:allowUrls
    
    deny:denyUrls 
    AddMore: addmore[]
}